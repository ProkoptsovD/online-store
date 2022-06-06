import { Component } from "react";
import PropTypes from 'prop-types';
import { Data, DetailsTable, Row, TableBody } from "./OrderDetails.styled";

class OrderDetails extends Component {
    static defaultProps = {
        fields: {
            tax: '21%',
            quantaty: 'quantaty:',
            total: 'total:',
        },
        values: {
            tax: '0',
            quantaty: '0',
            total: '0',
        }
    }
    render () {
        const { fields } = this.props;
        const { values } = this.props;

        return (
            <DetailsTable {...this.props}>
                <TableBody>
                    <Row {...this.props}>
                        <Data {...this.props}>
                            {fields.tax}
                        </Data>
                        <Data {...this.props}>
                            {values.tax}
                        </Data>
                    </Row>
                    <Row {...this.props}>
                        <Data {...this.props}>
                            {fields.quantaty}
                            </Data>
                        <Data {...this.props}>
                            {values.quantaty}
                        </Data>
                    </Row>
                    <Row {...this.props}>
                        <Data {...this.props}>
                            {fields.total}
                            </Data>
                        <Data {...this.props}>
                            {values.total}
                        </Data>
                    </Row>
                </TableBody>
            </DetailsTable>
        );
    };
};

OrderDetails.propTypes = {
    fields: PropTypes.objectOf(PropTypes.string),
    values: PropTypes.object,
};

export default OrderDetails;