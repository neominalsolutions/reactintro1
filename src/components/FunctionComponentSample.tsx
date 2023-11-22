import { useEffect, useState } from 'react';

type FunctionComponentProps = {
	title?: string;
	body?: string;
};
type FunctionComponentState = {
	counter: number;
	isActive: boolean;
};
function FunctionComponentSample(props: FunctionComponentProps) {
	// object deconstruction işlemi yaptık
	// Local State ile çalışırken component domdan çıktığında state sıfırlanır. initial değerine döner.
	const { title, body } = props;
	const [state, setState] = useState<FunctionComponentState>({
		// referance type state ile çalışma
		counter: 0,
		isActive: false,
	});
	const [random, setRandom] = useState<number>(); // value type state ile çalışma
	// value type değerler bir önceki state ile aynı ise gereksiz renderlardan kurtulmak için tekrar render almıyor. value type lar value değeri değişirse render alıyor.

	// bu tanımlama tehlikeli bir tanımlama, [] veya bir [state] değeri tanımlanmadoğı takdirde bu durumda component ile ilgili herhangi bir rendering durumuda useEffect tetiklenecektir. Dikkatli olalım gereksiz çağırılar yapmamıza sebep verebilir.
	useEffect(() => {
		console.log('useEffect no deps');
	}); // doma ilk giriş ve herhangi bir state de tetiklenir.

	// component içerisindeki state değişimi algıladğımız hook
	useEffect(() => {
		console.log('component willmount');
		// yapılacak olan işlemler
		// Component doma ilk basıldığında Api Call yapılabilir
		return () => {
			// Component Domdan ayrıldığında çalışır
			console.log('Component willunmout');
		};
	}, []); // [] herhangi bir state bağlılığı yok // state değişiminde useEffect özel hook tekrar tetiklenebilir.

	// useEffect ile random değerinin state değişimi takip et dedik
	useEffect(() => {
		// useEffect component doma girdiğinde 1 kere mahsus tetiklenir. ve state değişiminde de tetiklenir
		// componentDidUpdate state değiştiğinde çalış
		if (random !== undefined) {
			// inital değer değilse
			console.log('random değeri değişti');
		}
	}, [random]); //  [random] hangi state değerlerini takip edileceğini belirtir.

	const onIncrease = () => {
		// spread operatörü kullanarak object referans değerini güncellersek referans type değerlerde rendering işlemini zorlamış oluruz.
		// setState({ ...state }); // setState({ ...state, counter: state.counter + 1 });

		console.log('state.counter', state.counter);
		// state.counter = state.counter + 1;
		// setState(state); referans değişmedi state güncellenemedi
		// setState({ ...state }); // spread operator yeni bir referans üzerinden işlem yaptığı için state güncellenecektir. re-render olucak.
		// yukarıdakinin tek satırda yazımı
		setState({ ...state, counter: state.counter + 1 });
	};
	const onRandom = () => {
		const rdm = Math.ceil(Math.random() * 2);
		setRandom(rdm);
	};
	// render
	return (
		<>
			{/* property binding */}
			<h1>{title}</h1>
			<p>{body}</p>
			<p>Sayac: {state.counter}</p>
			<p>Random Number: {random}</p>
			{/* event binding */}
			<button onClick={onIncrease}>(+)</button>
			<button onClick={onRandom}>Generate Random Number</button>
		</>
	);
}

export default FunctionComponentSample;
