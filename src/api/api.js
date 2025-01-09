const API_BASE_URL = 'https://api.videosdk.live/v2';

export const getToken = async () => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0MzdmOWViZS1kMDg0LTRiODQtOWIwYS05Yjg1NTAyN2M3NDMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNjQwNzM4MSwiZXhwIjoxNzY3OTQzMzgxfQ.j1CEeHXdCyeAaNLgkM-cdpUX2DpfNTp_9KV7rO9r2eE';
};

export const createMeeting = async ({token}) => {
  const url = `${API_BASE_URL}/rooms`;
  const options = {
    method: 'POST',
    headers: {Authorization: token, 'Content-Type': 'application/json'},
  };

  const {roomId} = await fetch(url, options)
    .then(response => response.json())
    .catch(error => console.error('error', error));

  console.log('room', roomId);
  return roomId;
};
