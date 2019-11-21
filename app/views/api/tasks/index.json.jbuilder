@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :complete, :list_id
  end

end
