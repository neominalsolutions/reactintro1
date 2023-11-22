import { useEffect, useState } from 'react';
import { User } from './models/User';

function UsersParentSample() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		// component doma basılırken apidan veri çekme işlemlerinde useEffect tercih ediyoruz. useEffect async çalışır
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((data: User[]) => {
				setUsers(data); // state güncellemesi yaptık.
			});
	}, []);

	return (
		<div>
			{users.map((item: User) => {
				return <div key={item.id}>{item.name}</div>;
			})}
		</div>
	);
}
export default UsersParentSample;
