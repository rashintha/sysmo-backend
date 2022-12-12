# Sysmo Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


## MongoDB Configurations

### Enabling Replica Set

Open the `mongo.conf` file.

```bash
$ sudo nano /etc/mongo.conf
```

Uncomment the replication and add a replication set name.

```
replication:
  replSetName: "replicaset-01"
```

Restart the mongodb server and login and initiate the replication.

```bash
$ sudo systemctl restart mongodb
$ mongo
> rs.initiate()
```

