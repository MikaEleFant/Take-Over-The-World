@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :title, :task_ids
  end

end
