import React from "react";
import { Accordion } from "react-bootstrap";
import { Fade } from "react-reveal";

const Blogs = () => {
  return (
    <Fade top>
      <div className="w-75 mx-auto my-5 py-5">
        <h2 className="text-center primary-font primary-color fs-2 ">
          FAQ Blogs
        </h2>
        <div className="divider  mb-5"></div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="primary-font">
              What is the difference between Authorization and Authentication?
            </Accordion.Header>
            <Accordion.Body className="text-muted">
              <p>
                <strong className="text-dark">Authentication: </strong>
                Authentication is the act of validating that users are whom they
                claim to be. This is the first step in any security process.
                Complete an authentication process with:
                <strong className="text-dark"> Passwords-</strong>
                Usernames and passwords are the most common authentication
                factors. If a user enters the correct data, the system assumes
                the identity is valid and grants access.
                <strong className="text-dark"> One-time pins-</strong> Grant
                access for only one session or transaction.
                <strong className="text-dark"> Authentication apps-</strong>
                Generate security codes via an outside party that grants
                access.Biometrics. A user presents a fingerprint or eye scan to
                gain access to the system.
              </p>
              <p>
                <strong className="text-dark">Authorization: </strong>
                Authorization in system security is the process of giving the
                user permission to access a specific resource or function. This
                term is often used interchangeably with access control or client
                privilege. <strong className="text-dark">Authorization</strong>
                in the form of permissions. Once inside, the person has the
                authorization to access the kitchen and open the cupboard that
                holds the pet food. The person may not have permission to go
                into the bedroom for a quick nap.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="primary-font">
              Why are you using Firebase? What other options do you have to
              implement Authentication?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong className="text-dark">Firebase UseCase: </strong>
                It gives such an in-depth view of your product that can help us
                grow and make us marketing strategies. And that is totally
                free.We can easily identify the issues with our app that are
                related to the users that come and visit your app.We can set
                different values for different OS versions, region, app version,
                and a lot more. If you haven’t given it a try, then I would
                highly urge you to explore this fantastic product and check out
                how you can implement ant benefit from it.
              </p>
              <p>
                <strong className="text-dark">
                  There are many other company to implement authentication or
                  alternative of firebase Such as:
                </strong>
                <ul>
                  <li>Auth0.</li>
                  <li>Back4App.</li>
                  <li>JSON Web Token.</li>
                  <li>Okta.</li>
                  <li>Microsoft Azure.</li>
                  <li>Amazon Cognito.</li>
                </ul>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="primary-font">
              What other services does Firebase provide other than
              Authentication?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong className="text-dark">
                  There are many services which Firebase provides, Most useful
                  of them are:
                </strong>
                <ul>
                  <li>Cloud Firestone.</li>
                  <li>Cloud Functions.</li>
                  <li>Google Analytics.</li>
                  <li>Predictions.</li>
                  <li>Microsoft Azure.</li>
                  <li>Amazon Cognito.</li>
                  <li>Google Analytics.</li>
                  <li>Cloud Storage.</li>
                </ul>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Fade>
  );
};

export default Blogs;
