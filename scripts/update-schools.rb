#!/usr/bin/env ruby
# Run './scripts/update-schools.rb'
require 'csv'
require 'JSON'

class UpdateSchoolsList
  def run
    responsible_body = 'Kent'
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
    update_local_authority_schools_file(schools)
  end

  private

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
    json.gsub('"URN"', 'URN').gsub('"name"', 'name').gsub('"la"', 'la').gsub('"total"', 'total')
  end
end

u = UpdateSchoolsList.new
u.run
