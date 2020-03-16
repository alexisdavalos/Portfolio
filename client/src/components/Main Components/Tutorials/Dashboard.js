import React from 'react'

const Tutorials = (props) =>{

    return(
    <div className="dashboard is-full-height">
      {/* Dashboard Menu */}
      <div className={props.darkMode ? "dashboard-panel is-medium has-thick-padding has-background-black is-hidden-mobile" : "dashboard-panel is-medium has-thick-padding has-background-light is-hidden-mobile"}>
        <div className="dashboard-panel-content is-family-monospace">
          <aside className="menu has-text-white" >
            <p className="menu-label">
              General
            </p>
            <ul className="menu-list">
              <li><a href="/tutorials" className="is-active">Dashboard</a></li>
              <li><a href="/tutorials">Customers</a></li>
            </ul>
            <p className="menu-label">
              Administration
            </p>
            <ul className="menu-list">
              <li><a href="/tutorials">Team Settings</a></li>
              <li>
                <a href="/tutorials">Manage Your Team</a>
                <ul>
                  <li><a href="/tutorials">Members</a></li>
                  <li><a href="/tutorials">Plugins</a></li>
                  <li><a href="/tutorials">Add a member</a></li>
                </ul>
              </li>
              <li><a href="/tutorials">Invitations</a></li>
              <li><a href="/tutorials">Cloud Storage Environment Settings</a></li>
              <li><a href="/tutorials">Authentication</a></li>
            </ul>
            <p className="menu-label">
              Transactions
            </p>
            <ul className="menu-list">
              <li><a href="/tutorials">Payments</a></li>
              <li><a href="/tutorials">Transfers</a></li>
              <li><a href="/tutorials">Balance</a></li>
            </ul>
          </aside>
        </div>
      </div>
    
      {/* <!-- main section --> */}
      <div className="dashboard-main is-scrollable is-family-monospace">
    
        <section className="section">
          <p className={props.darkMode ? "title is-size-2 is-spaced has-text-white" : "title is-size-2 is-spaced has-text-dark"}>
            The Bulma Dashboard
          </p>

          <p className={props.darkMode ? "subtitle is-size-3 has-text-white" : "subtitle is-size-3 has-text-dark"}>
            A Bulma extension for full-page dashboard-style layouts
          </p>

          <hr/>

          <section className={props.darkMode ? "content is-medium is-family-monospace has-text-white" : "content is-medium is-family-monospace has-text-dark"}>
            Sunt excepteur elit sunt incididunt do laboris labore. Nisi aliqua fugiat dolor velit Lorem elit pariatur cillum eiusmod proident nostrud enim reprehenderit. Qui minim est commodo aute ipsum tempor proident veniam elit quis amet Lorem id.

            Laboris laborum cillum quis sit ex officia velit dolor Lorem mollit consequat. Voluptate est ipsum ea amet elit. Ad ipsum officia excepteur id ut non ipsum ex minim. Ut adipisicing cillum consectetur anim cupidatat qui occaecat. Minim adipisicing mollit et laboris commodo laboris aliqua labore voluptate duis quis magna enim laboris. Minim et laborum pariatur in anim veniam aliqua officia sunt deserunt officia consequat. Est sit ex aute sunt sit Lorem proident amet reprehenderit do et quis duis labore.

            Laborum in enim exercitation eiusmod id incididunt minim duis nisi reprehenderit do anim ullamco. Lorem esse dolor non ullamco ut sunt anim nisi ea duis eiusmod laboris in. Enim exercitation amet ipsum reprehenderit incididunt in. Consectetur officia commodo culpa deserunt exercitation nostrud elit deserunt aliqua nostrud. Nulla sunt eu laboris proident dolor. Minim excepteur labore occaecat tempor pariatur non veniam enim incididunt sint irure. Labore qui tempor esse consectetur amet magna qui est cillum.

            Reprehenderit consectetur ad esse aliquip. Reprehenderit cupidatat quis nulla minim officia Lorem ad in reprehenderit. Lorem reprehenderit qui consectetur dolor do qui enim tempor enim ut. Labore labore eu nisi velit proident cillum non. Officia adipisicing ut amet quis. Ullamco id aute aliquip id labore aliqua mollit ut aute commodo id magna.

            Cupidatat tempor id cillum incididunt. Irure velit ea excepteur exercitation exercitation labore tempor amet aute sint eu culpa. Elit occaecat minim dolor dolore et mollit cupidatat labore incididunt quis.

            Proident consequat irure sit consectetur sit est sit ipsum elit nostrud. Dolore adipisicing cillum officia esse voluptate eiusmod est ea incididunt sint sunt aliquip mollit. Ea anim dolore pariatur occaecat ut. Dolor ex proident nisi quis ea deserunt sint.

            Ad voluptate nulla ea mollit fugiat fugiat. Culpa non officia tempor exercitation est consequat cillum tempor exercitation est dolor occaecat labore. Aute laboris consequat do ut ut cupidatat elit est tempor. Fugiat esse qui ex veniam in cillum ipsum. Reprehenderit ex aliquip consequat non anim nisi nulla. Velit non voluptate ipsum do anim sit culpa.

            Laboris irure consequat magna ut occaecat adipisicing pariatur duis velit. Aute culpa enim enim quis sit pariatur do reprehenderit elit sint ullamco incididunt do dolor. Commodo sit ex aliquip sunt in aliquip commodo nostrud consectetur adipisicing. Sunt eiusmod ipsum nulla ex nostrud et pariatur aliqua duis ad in enim nostrud nostrud. Nisi Lorem minim mollit nulla consectetur aliquip consequat id est et enim dolore.

            Ad nostrud eu consectetur esse anim consectetur non ad. Dolore ipsum ullamco voluptate aute incididunt excepteur. Irure ad commodo irure pariatur elit enim. Qui minim ad nostrud id nisi. Eu Lorem anim elit irure tempor officia consequat non aute eiusmod. Irure aliqua elit deserunt ea exercitation veniam. Veniam adipisicing tempor pariatur exercitation.

            Ut aute consequat exercitation tempor veniam enim reprehenderit. Amet labore mollit sunt veniam in. Labore consequat in aliquip id. Ea irure tempor pariatur aliqua reprehenderit adipisicing esse nisi. Nisi ad ut excepteur qui sit qui aliqua Lorem. Consequat elit quis do proident.
          </section>
        </section>
      </div>
    
    </div>
    )

}

export default Tutorials;