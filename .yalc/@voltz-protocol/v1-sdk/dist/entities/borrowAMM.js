"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var constants_1 = require("../constants");
var typechain_1 = require("../typechain");
var price_1 = require("./fractions/price");
var tokenAmount_1 = require("./fractions/tokenAmount");
var axios_1 = __importDefault(require("axios"));
var geckoEthToUsd = function () { return __awaiter(void 0, void 0, void 0, function () {
    var attempt, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                attempt = 0;
                _a.label = 1;
            case 1:
                if (!(attempt < 5)) return [3 /*break*/, 6];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, axios_1.default.get('https://pro-api.coingecko.com/api/v3/simple/price?x_cg_pro_api_key=' + process.env.REACT_APP_COINGECKO_API_KEY + '&ids=ethereum&vs_currencies=usd')];
            case 3:
                data = _a.sent();
                return [2 /*return*/, data.data.ethereum.usd];
            case 4:
                error_1 = _a.sent();
                return [3 /*break*/, 5];
            case 5:
                attempt++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/, 0];
        }
    });
}); };
var BorrowAMM = /** @class */ (function () {
    function BorrowAMM(_a) {
        var id = _a.id, amm = _a.amm;
        var _b;
        this.underlyingDebt = 0;
        this.variableDebt = 0;
        this.fixedDebt = 0;
        this.aggregatedDebt = 0;
        this.id = id;
        this.signer = amm.signer;
        this.provider = amm.provider || ((_b = amm.signer) === null || _b === void 0 ? void 0 : _b.provider);
        this.environment = amm.environment;
        this.rateOracle = amm.rateOracle;
        this.termStartTimestamp = amm.termStartTimestamp;
        this.termEndTimestamp = amm.termEndTimestamp;
        this.underlyingToken = amm.underlyingToken;
        this.amm = amm;
        var protocolId = this.rateOracle.protocolId;
        if (protocolId !== 6 && protocolId !== 5) {
            throw new Error("Not a borrow market");
        }
    }
    // scale/descale according to underlying token
    BorrowAMM.prototype.descale = function (value) {
        if (this.underlyingToken.decimals <= 3) {
            return value.toNumber() / (Math.pow(10, this.underlyingToken.decimals));
        }
        else {
            return value.div(ethers_1.BigNumber.from(10).pow(this.underlyingToken.decimals - 3)).toNumber() / 1000;
        }
    };
    BorrowAMM.prototype.scale = function (value) {
        var price = price_1.Price.fromNumber(value);
        var tokenAmount = tokenAmount_1.TokenAmount.fromFractionalAmount(this.underlyingToken, price.numerator, price.denominator);
        var scaledValue = tokenAmount.scale();
        return scaledValue;
    };
    BorrowAMM.prototype.getAllSwaps = function (position) {
        var allSwaps = [];
        if (position === undefined) {
            return allSwaps;
        }
        for (var _i = 0, _a = position.swaps; _i < _a.length; _i++) {
            var s = _a[_i];
            allSwaps.push({
                fDelta: ethers_1.BigNumber.from(s.fixedTokenDeltaUnbalanced.toString()),
                vDelta: ethers_1.BigNumber.from(s.variableTokenDelta.toString()),
                timestamp: ethers_1.BigNumber.from(s.transactionTimestamp.toString())
            });
        }
        for (var _b = 0, _c = position.fcmSwaps; _b < _c.length; _b++) {
            var s = _c[_b];
            allSwaps.push({
                fDelta: ethers_1.BigNumber.from(s.fixedTokenDeltaUnbalanced.toString()),
                vDelta: ethers_1.BigNumber.from(s.variableTokenDelta.toString()),
                timestamp: ethers_1.BigNumber.from(s.transactionTimestamp.toString())
            });
        }
        for (var _d = 0, _e = position.fcmUnwinds; _d < _e.length; _d++) {
            var s = _e[_d];
            allSwaps.push({
                fDelta: ethers_1.BigNumber.from(s.fixedTokenDeltaUnbalanced.toString()),
                vDelta: ethers_1.BigNumber.from(s.variableTokenDelta.toString()),
                timestamp: ethers_1.BigNumber.from(s.transactionTimestamp.toString())
            });
        }
        allSwaps.sort(function (a, b) { return a.timestamp.sub(b.timestamp).toNumber(); });
        return allSwaps;
    };
    BorrowAMM.prototype.getAccruedCashflow = function (allSwaps, atMaturity) {
        return __awaiter(this, void 0, void 0, function () {
            var accruedCashflow, lenSwaps, lastBlock, lastBlockTimestamp, _a, _b, untilTimestamp, rateOracleContract, i, currentSwapTimestamp, normalizedTime, variableFactorBetweenSwaps, fixedCashflow, variableCashflow, cashflow;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Wallet not connected');
                        }
                        accruedCashflow = ethers_1.BigNumber.from(0);
                        lenSwaps = allSwaps.length;
                        return [4 /*yield*/, this.provider.getBlockNumber()];
                    case 1:
                        lastBlock = _c.sent();
                        _b = (_a = ethers_1.BigNumber).from;
                        return [4 /*yield*/, this.provider.getBlock(lastBlock - 2)];
                    case 2:
                        lastBlockTimestamp = _b.apply(_a, [(_c.sent()).timestamp]);
                        untilTimestamp = (atMaturity)
                            ? ethers_1.BigNumber.from(this.termEndTimestamp.toString())
                            : lastBlockTimestamp.mul(ethers_1.BigNumber.from(10).pow(18));
                        rateOracleContract = typechain_1.BaseRateOracle__factory.connect(this.rateOracle.id, this.provider);
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(i < lenSwaps)) return [3 /*break*/, 6];
                        currentSwapTimestamp = allSwaps[i].timestamp.mul(ethers_1.BigNumber.from(10).pow(18));
                        normalizedTime = (untilTimestamp.sub(currentSwapTimestamp)).div(ethers_1.BigNumber.from(constants_1.ONE_YEAR_IN_SECONDS));
                        return [4 /*yield*/, rateOracleContract.callStatic.variableFactor(currentSwapTimestamp, untilTimestamp)];
                    case 4:
                        variableFactorBetweenSwaps = _c.sent();
                        fixedCashflow = allSwaps[i].fDelta.mul(normalizedTime).div(ethers_1.BigNumber.from(100)).div(ethers_1.BigNumber.from(10).pow(18));
                        variableCashflow = allSwaps[i].vDelta.mul(variableFactorBetweenSwaps).div(ethers_1.BigNumber.from(10).pow(18));
                        cashflow = fixedCashflow.add(variableCashflow);
                        accruedCashflow = accruedCashflow.add(cashflow);
                        _c.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, this.descale(accruedCashflow)];
                }
            });
        });
    };
    BorrowAMM.prototype.getUnderlyingBorrowBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var protocolId, compoundRateOracle, cTokenAddress, aaveRateOracle, lendingPoolAddress, lendingPool, reserve, variableDebtTokenAddress, borrowBalance, userAddress, userAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        protocolId = this.rateOracle.protocolId;
                        if (!(protocolId === 6 && !this.cToken)) return [3 /*break*/, 2];
                        compoundRateOracle = typechain_1.CompoundBorrowRateOracle__factory.connect(this.rateOracle.id, this.signer);
                        return [4 /*yield*/, compoundRateOracle.ctoken()];
                    case 1:
                        cTokenAddress = _a.sent();
                        this.cToken = typechain_1.ICToken__factory.connect(cTokenAddress, this.signer);
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(protocolId === 5 && !this.aaveVariableDebtToken)) return [3 /*break*/, 5];
                        aaveRateOracle = typechain_1.AaveBorrowRateOracle__factory.connect(this.rateOracle.id, this.signer);
                        return [4 /*yield*/, aaveRateOracle.aaveLendingPool()];
                    case 3:
                        lendingPoolAddress = _a.sent();
                        lendingPool = typechain_1.IAaveV2LendingPool__factory.connect(lendingPoolAddress, this.signer);
                        if (!this.underlyingToken.id) {
                            throw new Error('missing underlying token address');
                        }
                        return [4 /*yield*/, lendingPool.getReserveData(this.underlyingToken.id)];
                    case 4:
                        reserve = _a.sent();
                        variableDebtTokenAddress = reserve.variableDebtTokenAddress;
                        this.aaveVariableDebtToken = typechain_1.IERC20Minimal__factory.connect(variableDebtTokenAddress, this.signer);
                        _a.label = 5;
                    case 5:
                        borrowBalance = ethers_1.BigNumber.from(0);
                        if (!this.cToken) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 6:
                        userAddress = _a.sent();
                        return [4 /*yield*/, this.cToken.callStatic.borrowBalanceCurrent(userAddress)];
                    case 7:
                        borrowBalance = _a.sent();
                        return [3 /*break*/, 11];
                    case 8:
                        if (!this.aaveVariableDebtToken) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 9:
                        userAddress = _a.sent();
                        return [4 /*yield*/, this.aaveVariableDebtToken.balanceOf(userAddress)];
                    case 10:
                        borrowBalance = _a.sent();
                        _a.label = 11;
                    case 11: return [2 /*return*/, this.descale(borrowBalance)];
                }
            });
        });
    };
    BorrowAMM.prototype.getFixedBorrowBalance = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            var allSwaps, lastBlock, lastBlockTimestamp, _a, _b, pastMaturity, accruedCashFlow, notional;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (position === undefined) {
                            return [2 /*return*/, 0];
                        }
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        allSwaps = this.getAllSwaps(position);
                        return [4 /*yield*/, this.provider.getBlockNumber()];
                    case 1:
                        lastBlock = _c.sent();
                        _b = (_a = ethers_1.BigNumber).from;
                        return [4 /*yield*/, this.provider.getBlock(lastBlock - 1)];
                    case 2:
                        lastBlockTimestamp = _b.apply(_a, [(_c.sent()).timestamp]);
                        pastMaturity = (ethers_1.BigNumber.from(this.termEndTimestamp.toString())).lt(lastBlockTimestamp.mul(ethers_1.BigNumber.from(10).pow(18)));
                        return [4 /*yield*/, this.getAccruedCashflow(allSwaps, pastMaturity)];
                    case 3:
                        accruedCashFlow = _c.sent();
                        notional = this.descale(ethers_1.BigNumber.from(position.variableTokenBalance.toString()));
                        return [2 /*return*/, notional + accruedCashFlow];
                }
            });
        });
    };
    // get variable debt: debt from underlying protocol - fixed debt on Voltz
    BorrowAMM.prototype.getAggregatedBorrowBalance = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            var fixedBorrowBalance, underlyingBorrowBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFixedBorrowBalance(position)];
                    case 1:
                        fixedBorrowBalance = _a.sent();
                        return [4 /*yield*/, this.getUnderlyingBorrowBalance()];
                    case 2:
                        underlyingBorrowBalance = _a.sent();
                        if (underlyingBorrowBalance >= fixedBorrowBalance) {
                            return [2 /*return*/, underlyingBorrowBalance - fixedBorrowBalance];
                        }
                        else {
                            return [2 /*return*/, 0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BorrowAMM.prototype.getFullyCollateralisedMarginRequirement = function (fixedTokenBalance, variableTokenBalance, fee) {
        return __awaiter(this, void 0, void 0, function () {
            var variableAPYToMaturity, termStartTimestamp, termEndTimestamp, fixedFactor, fcMargin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        return [4 /*yield*/, this.amm.getVariableFactor(ethers_1.BigNumber.from(this.termStartTimestamp.toString()), ethers_1.BigNumber.from(this.termEndTimestamp.toString()))];
                    case 1:
                        variableAPYToMaturity = _a.sent();
                        termStartTimestamp = (ethers_1.BigNumber.from(this.termStartTimestamp.toString()).div(ethers_1.BigNumber.from(10).pow(18))).toNumber();
                        termEndTimestamp = (ethers_1.BigNumber.from(this.termEndTimestamp.toString()).div(ethers_1.BigNumber.from(10).pow(18))).toNumber();
                        fixedFactor = (termEndTimestamp - termStartTimestamp) / constants_1.ONE_YEAR_IN_SECONDS * 0.01;
                        fcMargin = -(fixedTokenBalance * fixedFactor + variableTokenBalance * variableAPYToMaturity);
                        fcMargin = (fcMargin + fee) * 1.01;
                        return [2 /*return*/, fcMargin > 0 ? fcMargin : 0];
                }
            });
        });
    };
    BorrowAMM.prototype.getFixedBorrowBalanceInUSD = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            var balanceInTokens, EthToUsdPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFixedBorrowBalance(position)];
                    case 1:
                        balanceInTokens = _a.sent();
                        if (!(this.amm && this.amm.isETH)) return [3 /*break*/, 3];
                        return [4 /*yield*/, geckoEthToUsd()];
                    case 2:
                        EthToUsdPrice = _a.sent();
                        return [2 /*return*/, balanceInTokens * EthToUsdPrice];
                    case 3: return [2 /*return*/, balanceInTokens];
                }
            });
        });
    };
    BorrowAMM.prototype.getUnderlyingBorrowBalanceInUSD = function () {
        return __awaiter(this, void 0, void 0, function () {
            var balanceInTokens, EthToUsdPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUnderlyingBorrowBalance()];
                    case 1:
                        balanceInTokens = _a.sent();
                        if (!(this.amm && this.amm.isETH)) return [3 /*break*/, 3];
                        return [4 /*yield*/, geckoEthToUsd()];
                    case 2:
                        EthToUsdPrice = _a.sent();
                        return [2 /*return*/, balanceInTokens * EthToUsdPrice];
                    case 3: return [2 /*return*/, balanceInTokens];
                }
            });
        });
    };
    BorrowAMM.prototype.getAggregatedBorrowBalanceInUSD = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            var balanceInTokens, EthToUsdPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAggregatedBorrowBalance(position)];
                    case 1:
                        balanceInTokens = _a.sent();
                        if (!(this.amm && this.amm.isETH)) return [3 /*break*/, 3];
                        return [4 /*yield*/, geckoEthToUsd()];
                    case 2:
                        EthToUsdPrice = _a.sent();
                        return [2 /*return*/, balanceInTokens * EthToUsdPrice];
                    case 3: return [2 /*return*/, balanceInTokens];
                }
            });
        });
    };
    return BorrowAMM;
}());
exports.default = BorrowAMM;