import { Component } from 'react'
import { ToastWrapper } from './Toast.styled';
import { connect } from 'react-redux';
import { deleteNotification } from '../../../redux/actions/actions';

class Toast extends Component {
    messageList = {
        selectWarning: 'All options should be selected',
        addSuccess: 'All\'s good! The Item\'s in cart',
        error: 'Ups, something went wrong',
    }
    timoutId = null;

    componentDidMount() {
        const { remove, delay, id } = this.props;
        this.timoutId = setTimeout(() => remove(id), delay);
    }
    handleCloseToastClick = () => {
        const { remove, id } = this.props;
        
        clearTimeout(this.timoutId);
        remove(id);
    }
    render () {
        const { type, message } = this.props;

        switch (type) {
            case 'success':
                return  <ToastWrapper 
                            onClick={this.handleCloseToastClick}
                            bg="#198754"
                        >
                            <svg version="1.1" id="Layer_1" x="0px" y="0px"
                                width="128px" height="128px" viewBox="0 0 128 128" enableBackground="new 0 0 128 128">
                            <g>
                                <g>
                                    <path d="M64,0C28.656,0,0,28.656,0,64s28.656,64,64,64s64-28.656,64-64S99.344,0,64,0z M64,120C33.125,120,8,94.875,8,64
                                        S33.125,8,64,8s56,25.125,56,56S94.875,120,64,120z M83.797,41.375L55.516,69.656L44.203,58.344
                                        c-3.125-3.125-8.195-3.125-11.313,0c-3.125,3.125-3.125,8.195,0,11.313l16.969,16.969c3.117,3.125,8.188,3.125,11.313,0
                                        l33.938-33.938c3.125-3.125,3.125-8.195,0-11.313C91.992,38.25,86.922,38.25,83.797,41.375z"/>
                                </g>
                            </g>
                            </svg>
                            <p>
                                {this.messageList[message]}
                            </p>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero"/></svg>
                        </ToastWrapper>
            case 'warning':
                return  <ToastWrapper 
                            onClick={this.handleCloseToastClick}
                            bg="#CFAA01"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>
                            <p>
                                {this.messageList[message]}
                            </p>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero"/></svg>
                        </ToastWrapper>
            case 'error':
                return  <ToastWrapper 
                            onClick={this.handleCloseToastClick}
                            bg="#800000"
                        >
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fillRule="nonzero"/></svg>
                            <p>
                                {this.messageList[message]}
                            </p>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero" fill="#ffffff"/></svg>
                        </ToastWrapper>
            default:
                <ToastWrapper />
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => {
        dispatch(deleteNotification(id));
    }
});

export default connect(null, mapDispatchToProps)(Toast);
