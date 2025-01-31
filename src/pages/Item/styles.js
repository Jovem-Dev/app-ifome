import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #FFF;
`;

export const Details = styled.View`
  margin: 10px 20px 0 20px;
`;

export const ItemImage = styled.Image`
  height: 180px;
  border-radius: 5px;
`;

export const ItemTitle = styled.Text`
  font-size: 23px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
`;

export const BackButton = styled.TouchableOpacity``;

export const ItemIngredient = styled.Text`
  font-size: 18px;
  color: #999999;
  margin-top: 10px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ItemPrice = styled.Text`
  color: green;
  font-size: 22px;
`;

export const OldPrice = styled.Text`
  margin-left: 5px;
  color: #999999;
  font-size: 22px;
  text-decoration: line-through;
`;

export const BuyWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Buy = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  background-color: red;
  border-width: 1px;
  border-color: #eee;
  border-radius: 2px;
  padding: 15px;
`;
export const BuyTitle = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
`;
export const BuyIcon = styled.Text`
  margin-left: 10px;
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
  color: #F00000;
`;

export const DeliveryDelay = styled.Text`
  margin-left: 10px;
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

export const Message = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const SubMessage = styled.Text`
  color: #999999;
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

export const Warning = styled.View`
  background: #333;
  padding: 3px;
  border-radius: 2px;
`;

export const WarningText = styled.Text`
  font-size: 13px;
  color: #FFF;
`;
export const Options = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`

  padding: 10px 5px;
`;

export const Option = styled.TouchableOpacity`
  background: #fff;
  margin: 5px;
  width: 470px;
  height: 110px;
  padding: 5px;
  border-radius: 4px;

  justify-content: space-around;
`;

export const MessageItem = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-left: 40px;
  margin-top: -40px;
`;
