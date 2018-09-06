import React from "react";

export const SelectField = ( { input, label, children, meta: { touched, error, warning },} ) => {
    return (
        <div>
            <div className="form-group">
                <label>
                    <h5 style={touched &&  error ? {'color': 'red'} : null}>
                        {label}
                        {touched &&  error &&
                        <div className="ml-2 badge badge-secondary" style={{'background': 'red'}}>
                            {error}
                        </div>}
                    </h5>
                </label>
                <select className={error && touched ? 'is-invalid form-control' : 'form-control'} {...input}>
                    {children}
                </select>
            </div>
        </div>
    );
};
