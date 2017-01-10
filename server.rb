require 'hobbit'
require 'hobbit/hole'
# require 'bcrypt'
# require 'http'
# require 'json'
require './custom-hobbit'

class Server < Hobbit::Base
  include Hobbit::Hole

  get '/' do
    render_static 'index.html'
  end

end
