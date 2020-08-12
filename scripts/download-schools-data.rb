#!/usr/bin/env ruby
# Run './download-schools-data.rb'
require 'csv'
require 'open-uri'
require 'json'

class DownloadSchoolsData
  def run
    save_csv_file
  end

  private

  def datestring
    Time.now.strftime('%Y%m%d')
  end

  def csv_file_location
    "edubasealldata#{datestring}.csv"
  end

  def save_csv_file(location: csv_file_location)
    File.open(location, 'wb') { |f| f.write(open(csv_url).read) } unless File.exist?(location)
  end

  def csv_url
    "http://ea-edubase-api-prod.azurewebsites.net/edubase/edubasealldata#{datestring}.csv"
  end
end

d = DownloadSchoolsData.new
d.run
