import React from "react";

export const InputField = ( { input, label, type, meta: { touched, error, warning },} ) => {
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
                <input className={error && touched ? 'is-invalid form-control' : 'form-control'} {...input} type={type} />
            </div>
        </div>
    );
};
