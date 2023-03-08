import { ConfigProvider } from 'antd';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import store from './store';

function InertiaProvider(props) {
    const locale = useSelector(state => state.locale.value);
    return (
        <ConfigProvider locale={locale} >
            {props.children}
        </ConfigProvider>
    )

}

function Provider(props) {
    return (
        <StoreProvider store={store}>
            <InertiaProvider>
                {props.children}
            </InertiaProvider>
        </StoreProvider>
    )
}

export default Provider;
