import { useState } from 'react';

type UserChildProps = {
	name: string;
	email: string;
	id: number; 
    // Event OnItemSelected Event args id değeri
	onItemSelected: (id: number) => void;
};

export default function UserChildSample({
	name,
	email,
	id,
	onItemSelected, // componente ait kendi eventimi yazdım
}: UserChildProps) {
	const [selected, setSelected] = useState<boolean>(false);

	const onSelect = () => {
		setSelected(true);
		onItemSelected(id); // seçimden sonra component id değerini parent component emit etsin
	};

	return (
		<div style={selected ? { backgroundColor: 'green', color: 'white' } : {}}>
			<p>UserName: {name}</p>
			<p>Email: {email}</p>
			<button onClick={onSelect}>Seç</button>
			<button
				onClick={() => {
					setSelected(false);
				}}
			>
				Seçim Kaldır
			</button>
		</div>
	);
}
