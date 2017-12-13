import React, {Component} from 'react';
import axios from 'axios';
import './EquationForm.css'

class EquationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        axios.get(`http://localhost:4000/${this.state.value}`).then(res => {
            var result = res.data.queryresult.pods;
            this.setState({results : result});
            console.log(this.state.results);
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Solve" />
                </form>
                <div className='result-container'>
                    {
                        this.state.results.map(i => {
                            return (
                                <div className='result'>
                                    <h4 key={i.title}>{i.title}</h4>
                                    {i.subpods.map(j => {
                                            return (
                                                <div className='subpods-container'>
                                                    {j.title? <p key={j.title}>{j.title}</p> : null}
                                                    <img alt={j.img.alt} src={j.img.src}/><br/>
                                                </div>
                                            )})}
                                </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default EquationForm;