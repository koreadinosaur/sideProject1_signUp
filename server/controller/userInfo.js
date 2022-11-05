const data = require('../data/data.js');

module.exports = {
  getData: (req, res) => {
    const {username} = req.query; //key로 username을 받음
    
    let filteredData =[];

    if(username){
        filteredData = data.filter(item => item.username === username);
      return res.status(200).json(filteredData);
    }

    else{
      return res.status(400).send("Please put all the required keys. required keys: username"); //required key가 없으면 에러 메세지 리턴
    }

  },
  getAllData: (req, res) => {
    return res.status(200).json(data);
  },

  postData: (req, res) => {
  
    const{uuid, username, password, dateOfBirth, gender, email, phone, introduction} = req.query
    if(uuid && username && password && dateOfBirth && gender && email && phone && introduction) {
      let newData = {
        uuid: uuid,
        username: username,
        password: password,
        dateOfBirth: dateOfBirth,
        gender: gender,
        email: email,
        phone: phone,
        introduction: introduction,
      } 
      data.push(newData);
      return res.status(200).json(data); //query로 받은 값을 바탕으로 객체 생성 후 data에 push
    }

    // else{
    //   return res.status(400).send("Please put all the required keys. required keys: username"); //required key가 없으면 에러 메세지 리턴
    // }
  },
  
  putData: (req, res) => {
    const{uuid, username, password, dateOfBirth, gender, email, phone, introduction} = req.query
    if(uuid && username && password && dateOfBirth && gender && email && phone && introduction) {
      let newData = {
        uuid: uuid,
        username: username,
        password: password,
        dateOfBirth: dateOfBirth,
        gender: gender,
        email: email,
        phone: phone,
        introduction: introduction,
      } 

      let indexToReplace
      data.forEach((item,index)=>item.username === username ? indexToReplace = index : null)
      console.log(indexToReplace)
      data[indexToReplace] = newData;
      return res.status(200).json(data); //query로 받은 값을 바탕으로 객체 생성 후 data에 push
    }
  }
};