<h2>ReactJS User Interface of Features Accross Projects (Headless) Application for keeping records of features developed
    in projects of an Organisation.</h2>
<h4>git repo of the SpringBoot backend application - <a target="_blank" href="https://github.com/Kazitanvirazad/FeaturesAccrossProjects-SpringBoot.git"><span>FeaturesAccrossProjects-SpringBoot</span></a>
</h4>

<h4>Benefits of Application - </h4>
<ol>
    <li>Search feature/integration implemented across already build project(s)</li>
    <li>Looking for reusable assets features/integrations</li>
    <li>Usage static data of features built across projects for RFPs/Sales Proposals</li>
    <li>Product Managers to upgrade them on the features and their workflows</li>
    <li>Provision to add more advanced features and projects inside application</li>
</ol>

<h4><b><u>Configuring React App</u></b></h4>
<h5>Go to Project root and run command - <b>'npm run build'</b>. It will create the production build of the app in 'dist' directory.</h5>
<h5><u>For Static Server [Apache24]</u></h5>
<ol>
    <li>Copy the build files from the dist directory to <b>'Apache24/htdocs/'</b></li>
    <li>Create a file '.htaccess' inside <b>'Apache24/htdocs/'</b> and paste the line - 'ErrorDocument 404 /index.html'. This will solve the page refresh issue for React Router Client-side-routing</li>
    <li>Open file <b>'Apache24/conf/httpd.conf'</b> and set - 'AllowOverride' value to 'All' (default value is None) inside &lt;Directory "${SRVROOT}/htdocs"&gt; tag to make '.htaccess' file directives override controls.</li>
    <li>Start Apache http server.</li>
</ol>
<h5><u>For ExpressJS Server</u></h5>
<ol>
    <li>Copy the build files from the dist directory to <b>'{project-root_directory}/expressserver/reactbuild/'</b></li>
    <li>Start ExpressJS Server with command - 'npm run start'</li>
</ol>