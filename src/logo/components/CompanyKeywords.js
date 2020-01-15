import React from 'react';

class CompanyKeywords extends React.Component {
    constructor(props) {
        super(props);
        this.state = { companykeyword: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        this.setState({ companykeyword: event.target.value });
    }

    render() {
        return (
                <div className="BrandAI-form">

                    <span className="orange-bar"></span>

                    <form name="company_name">

                        <label htmlFor="company_name">First, what keywords are related to your Company or Organization?</label>
                        <input onChange={ this.handleInputChange } type="text" autoFocus={true} ref={input => {
                        this.state.companykeyword = input;
                    }}/>

                        <span className="bottom-label">This will be used as In the name generation.</span>

                        <button onClick={ e =>{
                              e.preventDefault();
                               this.props.onClick(this.state.companykeyword.value);
                               this.props.history.push('/tagline');
                               }
                             }
                                className={ this.state.companykeyword.length > 0 ? 'BrandAI-btn' : 'BrandAI-btn btn-disabled' }>
                            Continue
                        </button>
                    </form>
                </div>
        )
    }
}

export default CompanyKeywords;