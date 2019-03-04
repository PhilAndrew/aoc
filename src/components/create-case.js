import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];


class MySelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
      />
    );
  }
}


export default () => (
  <GuestLayout>
    <div className="container p-b-md p-r-md p-l-md">

    <div className="row ">
        <div className="col-md-2 order-md-1">
            <div class="row">
            Left side menu
            </div>
        </div>
        <div className="col-md-6 order-md-1">
        <h4 className="mb-3">Create a new Case</h4>
        <form className="needs-validation" noValidate>

            <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="" required />
            </div>
            <div className="mb-3">
            <label htmlFor="practice-area">Practice Area</label>
            <MySelect />
            </div>
            <div className="mb-3">
            <label htmlFor="jurisdiction">Jurisdiction</label>
            <select className="custom-select d-block w-100" id="jurisdiction" required>
                <option defaultValue="">Choose...</option>
                <option>United States</option>
            </select>
            </div>            
            <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea id="description" class="form-control" rows="3" placeholder="" required></textarea>
            </div>
            <div className="mb-3">
            <label htmlFor="priority">Priority</label>
            <input type="text" className="form-control" id="priority" placeholder="" required />
            </div>
            <div className="mb-3">
            <label htmlFor="legal-skill">Legal skill</label>
            <input type="text" className="form-control" id="legal-skill" placeholder="" required />
            </div>

            
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Create Case</button>
        </form>
        </div>
      </div> 

    </div>
  </GuestLayout>
);
