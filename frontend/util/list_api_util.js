export const fetchLists = user_id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/lists`,
  })
);

// export const fetchList = (user_id, list_id) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${user_id}/lists/${list_id}`
//   })
// );

export const createList = (user_id, list) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${user_id}/lists`,
    data: { list }
  })
);

export const updateList = (user_id, list) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}/lists/${list.id}`,
    data: { list }
  })
);

export const removeList = (user_id, list_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${user_id}/lists/${list_id}`
  })
);
