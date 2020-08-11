#!/usr/bin/env ruby
# Run './scripts/update-schools.rb'
require 'csv'
require 'JSON'

class UpdateSchoolsList
  def run
    responsible_body = 'Stockton-on-Tees'
    rows = CSV.read(csv_file_location, { headers: true })
    grouped_by_responsible_body = rows.group_by { |r| r['LA'] }
    la_schools = grouped_by_responsible_body[responsible_body]
    only_schools_with_allocations = la_schools.reject {|r| r['Total '] == '0' }

    schools = only_schools_with_allocations.sort_by { |r| r['Name'] }.map do |r|
      {
        URN: Integer(r['URN']),
        name: r['Name'].gsub("'", "’"),
        la: r['LA'],
        #total: r['Total ']
      }
    end

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
    json.gsub('"URN"', 'URN').gsub('"name"', 'name').gsub('"la"', 'la')
  end
end

u = UpdateSchoolsList.new
u.run
