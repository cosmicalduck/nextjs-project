import axios from 'axios';
import Users from '@/components/Users';

async function fetchUsers() {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data;
}

async function IndexPage() {
  const users = await fetchUsers();
  return (
    <Users users={users} />
  );

}

export default IndexPage;