// const cityMappingTable = {
//   '臺北市': 'Taipei',
//   '新北市': 'NewTaipei',
//   '桃園市': 'Taoyuan',
//   '臺中市': 'Taichung',
//   '臺南市': 'Tainan',
//   '高雄市': 'Kaohsiung',
//   '基隆市': 'Keelung',
//   '新竹市': 'Hsinchu',
//   '新竹縣': 'HsinchuCounty',
//   '苗栗縣': 'MiaoliCounty',
//   '彰化縣': 'ChanghuaCounty',
//   '南投縣': 'NantouCounty',
//   '雲林縣': 'YunlinCounty',
//   '嘉義縣': 'ChiayiCounty',
//   '嘉義市': 'Chiayi',
//   '屏東縣': 'PingtungCounty',
//   '宜蘭縣': 'YilanCounty',
//   '花蓮縣': 'HualienCounty',
//   '臺東縣': 'TaitungCounty',
//   '金門縣': 'KinmenCounty',
//   '澎湖縣': 'PenghuCounty',
//   '連江縣': 'LienchiangCounty',
// }

// 把臺改成台版本
const cityMappingTable = {
  '台北市': 'Taipei',
  '新北市': 'NewTaipei',
  '桃園市': 'Taoyuan',
  '台中市': 'Taichung',
  '台南市': 'Tainan',
  '高雄市': 'Kaohsiung',
  '基隆市': 'Keelung',
  '新竹市': 'Hsinchu',
  '新竹縣': 'HsinchuCounty',
  '苗栗縣': 'MiaoliCounty',
  '彰化縣': 'ChanghuaCounty',
  '南投縣': 'NantouCounty',
  '雲林縣': 'YunlinCounty',
  '嘉義縣': 'ChiayiCounty',
  '嘉義市': 'Chiayi',
  '屏東縣': 'PingtungCounty',
  '宜蘭縣': 'YilanCounty',
  '花蓮縣': 'HualienCounty',
  '台東縣': 'TaitungCounty',
  '金門縣': 'KinmenCounty',
  '澎湖縣': 'PenghuCounty',
  '連江縣': 'LienchiangCounty',
}

export const getCityInputList = () => {
  const cityListOptions = Object.keys(cityMappingTable).map(name => {
    const cityCode = cityMappingTable[name]
    return {
      cityName: name,
      cityCode: cityCode,
    }
  })

  return cityListOptions
}

export const getCityListOptions = () => {
  const cityListOptions = Object.keys(cityMappingTable).map(name => {
    const cityCode = cityMappingTable[name]

    return { value: cityCode, label: name }
  })

  return cityListOptions
}

export const getCityCode = chineseName => {
  return cityMappingTable[chineseName]
}
