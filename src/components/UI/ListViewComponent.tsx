type ListViewProps = {
	items: any[];
};

export default function ListViewComponent({ items }: ListViewProps) {
	return (
		<>
			<div>Listedekiler : {items.length}</div>
			<hr></hr>
			<span>
				{items.map((item: any) => {
					return (
						<>
							<span key={`selected_$`}>{item.text}</span>{' '}
						</>
					);
				})}
			</span>
		</>
	);
}
