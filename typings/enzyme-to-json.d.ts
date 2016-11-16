declare module 'enzyme-to-json' {
	import { ShallowWrapper, ReactWrapper, CheerioWrapper } from 'enzyme';

	interface INodeJson {
		type: string;
		props: any;
		'$$typeof': Symbol;
		children?: INodeJson[]
	}

	export function shallowToJson(wrapper: ShallowWrapper<any, any>): INodeJson;
	export function mountToJson(wrapper: ReactWrapper<any, any>): INodeJson;
	export function renderToJson(wrapper: CheerioWrapper<any, any>): string | INodeJson;
}