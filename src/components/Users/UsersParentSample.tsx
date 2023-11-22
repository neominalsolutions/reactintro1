import { useEffect, useState } from 'react';
import { User } from './models/User';
import UserChildSample from './UserChildSample';
import ListViewComponent from '../UI/ListViewComponent';

function UsersParentSample() {
	const [users, setUsers] = useState<User[]>([]);
	const [selectedItems, setSelectedItems] = useState<User[]>([]);

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

	const onItemSelect = (id: number) => {
		console.log('seçilen id', id);
		// event emit olduğunda parent componente bir eylem yapıcam
		alert('seçilen item id' + id);
		const selectedObject = users.find((x) => x.id === id);
		if (selectedObject !== null) {
			setSelectedItems([selectedObject as User, ...selectedItems]);
		}
	};

	return (
		<div>
			<ListViewComponent
				items={selectedItems.map((item) => {
					return {
						text: item.name,
					};
				})}
			/>

			<hr></hr>
			{users.map((item: User) => {
				return (
					<UserChildSample
						id={item.id}
						key={item.id}
						name={item.name}
						email={item.email}
						onItemSelected={onItemSelect}
					/>
				);
			})}
		</div>
	);
}
export default UsersParentSample;
