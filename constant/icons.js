import styled from "styled-components";
import { Sun } from "@styled-icons/fa-solid";
import { CurrencyExchange, MoonStarsFill } from "@styled-icons/bootstrap";
import { Convertio, Ethereum } from "@styled-icons/simple-icons";
import { WindowNew } from "@styled-icons/fluentui-system-filled";
import { Notification } from "@styled-icons/icomoon";

export const MoonStarsIcon = styled(MoonStarsFill)`
  color: #171923;
`;

export const SunIcon = styled(Sun)`
  color: #fff;
`;

export const CurrencyExchangeIcon = styled(CurrencyExchange)`
  color: inherit;
`;

export const ConverterIcon = styled(Convertio)`
  color: inherit;
`;

export const NewTabIcon = styled(WindowNew)`
  color: inherit;
`;

export const ErrorIcon = styled(Notification)`
  color: inherit;
  padding-right: 0.3rem;
`;

export const EthereumIcon = styled(Ethereum)`
  color: inherit;
`;
