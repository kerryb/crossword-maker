require "jasmine"
load "jasmine/tasks/jasmine.rake"

require "jshintrb/jshinttask"
Jshintrb::JshintTask.new :jshint do |t|
  t.pattern = 'js/**/*.js'
  t.exclude_pattern = 'js/lib/**/*'
  t.options = {undef: false}
end

task default: %i(jshint jasmine:ci)
