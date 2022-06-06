import { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, OptionButton, OptionList, OptionName, Wrapper } from './OptionPicker.styled';

class OptionPicker extends Component {
    renderOptionButtonList = () => {
        const { option: { items , type}, disabled, selected, optionPickerType } = this.props;
        const normalizedType = type.toLowerCase();
        const isText = normalizedType === 'text';

        return items.map(({ value, displayValue }, idx) => (
            <ListItem
                key={idx}
                optionPickerType={optionPickerType}
            >
                <OptionButton
                    id={idx}
                    optionType={normalizedType}
                    value={displayValue}
                    disabled={disabled}
                    selected={idx === selected}
                    optionPickerType={optionPickerType}
                >
                    {isText && value}
                </OptionButton>
            </ListItem>
        ));
    };
    render () {
        const { option: { name }, optionPickerType } = this.props;
        const { id, onClick } = this.props;

        return (
            <Wrapper
                onClick={onClick}
                id={id}
                optionPickerType={optionPickerType}
            >
                <OptionName
                    optionPickerType={optionPickerType}
                >
                    {name + ':'}
                </OptionName>
                <OptionList
                    optionPickerType={optionPickerType}
                >
                    {this.renderOptionButtonList()}
                </OptionList>
            </Wrapper>
        );
    }
}

OptionPicker.propTypes = {
    option: PropTypes.object.isRequired,
    wrapper: PropTypes.object,
    optionName: PropTypes.object,
    OptionList: PropTypes.object,
}

export default OptionPicker;