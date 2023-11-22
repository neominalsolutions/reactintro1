let nm: number = 10;
// nm = 'ali';

// let nm2 = 10;
// nm2 = 'ali';

// Class yapıları ile çalışma

export interface Employee {
	socialNumber?: string; // optional değer.
	hired: boolean; // required ifade
}
// generic ifadeler ile çalışma
export abstract class Entity<TKey> {
	public key!: TKey;
}

export class Person extends Entity<string> {
	private _id!: number; // ! ile yazınca id değeri undefined olabilir.
	//private _id: number | undefined; // unionTypes

	public set id(value: number) {
		this._id = value;
	}
	public get id(): number {
		return this._id;
	}

	protected identityNumber: string;
	/**
	 *
	 */
	constructor(identityNumber: string) {
		super(); // kalıtım alırsak super keyword kesinlikle kullanmamız lazım
		// this keyword üstünde tanımlanmalıdır.
		this.identityNumber = identityNumber;
	}
}

export class User extends Person implements Employee {
	// access modifier kullanabiliriz
	private name: string;
	private surname: string;

	constructor(name: string, surname: string, identityNumber: string) {
		super(identityNumber);
		this.name = name.trim().toUpperCase();
		this.surname = surname.trim().toUpperCase();
	}
	socialNumber?: string | undefined; // Union Types, bir değişken birden fazla değer alabilir.
	hired: boolean = false;
	// constructor overload method overload ts de yok.
	// constructor(){// }

	public getFullName() {
		return this.name + ' ' + this.surname;
	}

	// public getFullName(name:string) {
	// 	return this.name + ' ' + this.surname;
	// }
}

const user = new User('ali', 'can', '324324');
user.id = 1; // setter
const nmm = user.id; // getter

// string literal types
// typescript de kendimize kendi custom tiplerimi oluşturabiliriz.
// kontrollü tip tanımları için güzel bir kullanım
type bgColorType = 'white' | 'black' | 'gray'; // bu tiplerden birisini değer olarak verebilir.
const myBgColor: bgColorType = 'gray';

// var olan type yeni özelikler kazandırabiliriz. biz bu işleme intersection
type newBgColorType = bgColorType | 'yellow';

const myExtendColor: newBgColorType = 'white';

type Button = {
	text: string;
};

type PrimaryButton = Button & { color?: string }; // Intersect işlemi

const btn: PrimaryButton = { text: 'button1', color: 'white' };

// TS dosyası compile edilip js dosyasına dönüşüyor.

// Static class ile çalışma
// TS classlar static olarak işaretlenemez, eğer class içerisinde static bir method tanımı yaparsa sınıf static olarak çalışır. Tek bir instance üzerinden çalışır.

export class Math {
	// önüne public yazmadığımızda method property public olarak kullanılır.
	static Sum(number1: number, number2: number = 5) {
		return number1 + number2;
	}
}

// static sınıf örneği
// Genelde Helper service olarak kullanılıyor.
Math.Sum(10, 56);
Math.Sum(45);
// Math.Sum();
