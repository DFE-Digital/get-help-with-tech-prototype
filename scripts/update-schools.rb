#!/usr/bin/env ruby
# Run './scripts/update-schools.rb'
require 'csv'
require 'JSON'

class UpdateSchoolsList
  def run
    responsible_body = 'Lancashire'
    rows = CSV.read(csv_file_location, { headers: true })
    grouped_by_responsible_body = rows.group_by { |r| r['LA'] }
    la_schools = grouped_by_responsible_body[responsible_body]
    only_schools_with_allocations = la_schools.reject {|r| r['Total '] == '0' }

    schools = only_schools_with_allocations.sort_by { |r| r['Name'] }.map do |r|
      total = Integer(r['Total '])
      lower = total < 40 ? 0 : total - 40
      upper = total < 40 ? total + 20 : total + 40

      {
        URN: Integer(r['URN']),
        name: r['Name'].gsub("'", "’"),
        la: r['LA'],
        total: rand(Range.new(lower, upper))
      }
    end

    puts "Schools: #{schools.count}"
    puts "Enriching..."
    enrich_schools_data(schools)

    only_la_schools = schools.keep_if do |s|
      ['Local authority maintained schools', 'Special schools'].include? s[:type]
    end

    puts "LA schools: #{only_la_schools.count}"
    update_local_authority_schools_file(only_la_schools)
  end

  private

  def enrich_schools_data(schools)
    urns = schools.map {|s| s[:URN] }
    data_rows = CSV.read(schools_data_csv_file_location, { headers: true, converters: :numeric, encoding: 'windows-1251:utf-8' })

    schools.each do |school|
      row = data_rows.find { |s| s['URN'] == school[:URN] }
      school[:phase] = row['PhaseOfEducation (name)']
      school[:type] = row['EstablishmentTypeGroup (name)']
      school[:headteacher] = "#{row['HeadFirstName']} #{row['HeadLastName']}"
      school[:headteacher_email] = "#{row['HeadFirstName']}.#{row['HeadLastName']}@school.gov.uk".downcase
      school[:fsm_percentage] = row['PercentageFSM']
    end
  end

  def schools_data_csv_file_location
    "scripts/edubasealldata.csv"
  end

  def csv_file_location
    "scripts/wave2allocations.csv"
  end

  def local_authority_schools_file
    "app/data/local-authority-schools.js"
  end

  def update_local_authority_schools_file(schools)
    json = schools_as_json(schools)
    file_contents = json_as_js_object(json)

    File.open(local_authority_schools_file, 'wb') do |f|
      f.write("module.exports = #{file_contents}\n")
    end
  end

  def schools_as_json(schools)
    JSON.pretty_generate(schools)
  end

  def json_as_js_object(json)
    json
      .gsub('"URN"', 'URN')
      .gsub('"name"', 'name')
      .gsub('"la"', 'la')
      .gsub('"total"', 'total')
      .gsub('"phase"', 'phase')
      .gsub('"type"', 'type')
      .gsub('"headteacher"', 'headteacher')
      .gsub('"headteacher_email"', 'headteacher_email')
      .gsub('"fsm_percentage"', 'fsm_percentage')
  end
end

u = UpdateSchoolsList.new
u.run
