class Record < ApplicationRecord
  attr_reader :record
  # if heroku, use heroku psql db
  # --------------------------------------------------
  # if statement shouldn't require change
  if (ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  # --------------------------------------------------

  # else, use local psql db
  else
    DB = PG.connect(
      host: "localhost",
      port: 3000,
      dbname: 'records')
  end

  def initialize(opts = {})
    @record = opts["record"].to_i
  end

  # CODE HERE
  # ...
  # ...

end
