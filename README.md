# toyota-demo
A repository that hosts necessary archives to run the Toyota Team demo.

# How to install stuff to run demo
## Pre-requisite
1. Java 1.7+ installed (1.7.0)
2. Maven 3+ installed (3.0.5)
3. Apache Tomcat 7+ installed (7)

For the purpose of this demo, we will use Apache Tomcat 7.

## Installation Steps
1. Install and/or run Apache Tomcat 7
This can be done by either installing Apache Tomcat server from the repo manager of your environment's choice:
`sudo apt-get install tomcat7`

or simply download the archive in this repo `apache-tomcat-7.0.61.zip` and unpack the .zip.

2. Compile .jar file by cloning https://github.com/asiandrummer/v2v and following the instructions to compile using Maven.
3. Deploy the .jar file to Tomcat server
(for the purpose of this demo, we will follow "Poor Man's Installation" documented in above v2v repository)
4. Run Tomcat Server
Depending on what you did in #1, either start it up by:
`sudo service tomcat7 start`

or run: `{$APACHE_TOMCAT_UNPACKED_DIR}/bin/catalina.sh run`

(Be sure to have IPv4Stack preferred on your tomcat server: -Djava.net.preferIPv4Stack=true)
