task default: %w[start]

task :start do
  sh 'rackup -q --host 0.0.0.0'
end

task :loud do
  sh 'rackup --host 0.0.0.0'
end

task :init do
  sh 'bundle install'
  sh 'npm install'
  sh 'gulp build'
end
