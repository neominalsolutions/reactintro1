import { Component, ReactNode } from 'react';

// Component dışarıdan gönderilen intial değer
type ClassComponentProps = {
	title?: string;
	body?: string;
};
type ClassComponentState = {
	counter: number; // Componant local state temsil ediyor
};
export default class ClassComponentSample extends Component<
	ClassComponentProps,
	ClassComponentState
> {
	state: ClassComponentState;
	constructor(props: ClassComponentProps) {
		super(props);
		this.state = { counter: 0 }; // state inital değeri
		this.onIncrease = this.onIncrease.bind(this); // methodun event listenera belirttik.
	}
	onIncrease() {
		// setState state değişmese bile {} yada aynı this.state gönderildiğinde gereksiz yere tekrar render alınıyor bu tarz kodları bulup gözden geçirelim.
		// this.setState({}); // current state bind et
		this.setState({ counter: this.state.counter + 1 }); //local state güncellemesi, virtual doma state değimini söyledik re-rendering süreci gerçekleşecek. setState ile render tetiklenir.
	}

	componentDidMount(): void {
		// 1. tetikleme
		console.log('Component ilk doma giridiğinde tetiklenen method');
		// API'dan veri çekme işlemine yer veririz.
		this.setState({ counter: 1 });
	}

	componentDidUpdate(
		prevProps: Readonly<ClassComponentProps>,
		prevState: Readonly<ClassComponentState>,
		snapshot?: any
	): void {
		console.log('Component içinde state değişiminde tetiklenir');
	} // 2.tetiklenen

	componentWillUnmount(): void {
		console.log('Component domdan çıkınca tetiklenir.');
	} // domadan çıkışta domdaki nesneleri temizlemek api isteklerini yada timing işlemlerini clear etmek için kullanırız.

	render(): ReactNode {
		// component doma girdiğinde 1 kez render olur. Bide state değişiminde render olur.
		return (
			<>
				<h1>{this.props.title}</h1>
				<p>{this.props.body}</p>
				<p>Sayac: {this.state.counter}</p>
				<button onClick={this.onIncrease}>(+)</button>
			</>
		);
	}
}
