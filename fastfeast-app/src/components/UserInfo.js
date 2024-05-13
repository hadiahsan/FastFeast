import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Title from './Title';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implement your sign-up logic here, e.g., send data to server
    // Reset form after submission (optional)
    setFormData({ firstName: '', lastName: '', email: '', password: '' });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-50">
      <Title></Title>
      <h2 className="text-center mb-4" style={{marginTop:"-20px"}}>Personal Information</h2>

        <Form onSubmit={handleSubmit} className="px-5">

        <Form.Group className="mb-4">
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Country</option>
              <option value="USA">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, The Democratic Republic of The</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote D'ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and Mcdonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              {/* Add more countries as needed */}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="Province"
              placeholder="Province"
              name="Province"
              value={formData.province}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="City"
              placeholder="City"
              name="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="Street Address"
              placeholder="Street Address"
              name="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="Postal Code"
              placeholder="Postal Code"
              name="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </Form.Group>

          
          <Link to="/">
          <Button variant="danger" type="submit" className="w-100">
            Continue
          </Button>
          </Link>

        </Form>

      </div>
    </div>
  );
};

export default UserInfo;