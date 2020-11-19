import styled from 'styled-components/native';
 //container


export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  margin-left: 10px;
`;

export const BackButton = styled.TouchableOpacity``;


export const Title = styled.Text`
  font-size: 14px;
  color: black;
  text-align:left;
  font-weight:bold;
  padding-top: 30px;
  padding-left: 20px;
`;

export const LeftHeader = styled.View``;

export const DrinkInfo = styled.View``;

export const DrinkHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 25px;
  background: #eee;
  padding: 20px;
`;

export const DrinkItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const DrinkTitle = styled.Text`
  font-size: 15px;
`;

export const DrinkPrice = styled.Text`
  color: #999999;
  font-weight: bold;
`;
export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Delivery = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  border-width: 1px;
  border-color: #eee;
  border-radius: 2px;
  padding: 15px;
`;

export const DeliveryTitle = styled.Text`
  font-size: 14px;
  color: #999999;
  padding-right: 70px;
`;

