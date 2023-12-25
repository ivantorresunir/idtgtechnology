import React from 'react';
import '../css/data_table.css';

export const DataTable = (props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                {props.title_list.map((title, i) => {
                    return (
                        <React.Fragment key={i}>
                            <th scope="col">{title}</th>
                        </React.Fragment>
                    );
                })}
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {props.body_list.map((element, i) => {
                return (
                    <React.Fragment key={i}>
                        <tr>
                            {props.title_list.map((title, u) => {
                                return (
                                    <React.Fragment key={u}>
                                        <td>{element[u]}</td>
                                    </React.Fragment>
                                );
                            })}
                        </tr>
                    </React.Fragment>
                );
            })}
            </tbody>
        </table>
    )
};