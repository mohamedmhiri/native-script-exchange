var commonModule = require("./gauges-common");
var color_1 = require("color");
var observable_array_1 = require("data/observable-array");
var weakEvents = require("ui/core/weak-event-listener");
exports.knownCollections = commonModule.knownCollections;
var RadRadialGauge = (function (_super) {
    __extends(RadRadialGauge, _super);
    function RadRadialGauge() {
        _super.call(this);
    }
    Object.defineProperty(RadRadialGauge.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadRadialGauge.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadRadialGauge.prototype._createUI = function () {
        this._android = new com.telerik.widget.gauge.RadRadialGaugeView(this._context);
        if (this.scales) {
            weakEvents.addWeakEventListener(this.scales, observable_array_1.ObservableArray.changeEvent, this.scalesCollectionChanged, this);
            this.initializer.updateNativeObject(this);
            this.reloadScales();
        }
    };
    return RadRadialGauge;
}(commonModule.RadRadialGauge));
exports.RadRadialGauge = RadRadialGauge;
var RadialScale = (function (_super) {
    __extends(RadialScale, _super);
    function RadialScale() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RadialScale.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialScale.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialScale.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
            this._android = new com.telerik.widget.scales.GaugeRadialScale(this._owner._context);
            if (this.indicators) {
                weakEvents.addWeakEventListener(this.indicators, observable_array_1.ObservableArray.changeEvent, this.indicatorsCollectionChanged, this);
            }
            this.initializer.updateNativeObject(this);
            this.updateNativeRadialScale();
        },
        enumerable: true,
        configurable: true
    });
    RadialScale.prototype.updateNativeRadialScale = function () {
        this._android.setStartAngle(this.startAngle);
        this._android.setSweepAngle(this.sweepAngle);
        this._android.setRadius(this.radius);
    };
    RadialScale.prototype._onStartAnglePropertyChanged = function (eventData) {
        if (!this._android) {
            return;
        }
        this._android.setStartAngle(eventData.newValue);
    };
    RadialScale.prototype._onSweepAnglePropertyChanged = function (eventData) {
        if (!this._android) {
            return;
        }
        this._android.setSweepAngle(eventData.newValue);
    };
    RadialScale.prototype._onRadiusPropertyChanged = function (eventData) {
        if (!this._android) {
            return;
        }
        this._android.setRadius(eventData.newValue);
    };
    return RadialScale;
}(commonModule.RadialScale));
exports.RadialScale = RadialScale;
var ScaleStyle = (function (_super) {
    __extends(ScaleStyle, _super);
    function ScaleStyle() {
        _super.apply(this, arguments);
    }
    ScaleStyle.prototype._onLineColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeColor(new color_1.Color(eventData.newValue).android);
        }
    };
    ScaleStyle.prototype._onLineThicknessPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            if (eventData.newValue == 0) {
                this.owner.android.setLineVisible(false);
            }
            else {
                this.owner.android.setLineVisible(true);
            }
            this.owner.android.setStrokeWidth(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onTicksVisiblePropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTicksVisible(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onMajorTicksCountPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksCount(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onMinorTicksCountPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksCount(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onТicksOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTicksOffset(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onTicksLayoutModePropertyChanged = function (eventData) {
        if (!this.shouldUpdateNativeObject()) {
            return;
        }
        if (eventData.newValue == commonModule.ScaleTicksLayoutMode.Inner) {
            this.owner.android.setTicksLayoutMode(com.telerik.widget.scales.GaugeScaleTicksLayoutMode.INNER);
        }
        else if (eventData.newValue == commonModule.ScaleTicksLayoutMode.Outer) {
            this.owner.android.setTicksLayoutMode(com.telerik.widget.scales.GaugeScaleTicksLayoutMode.OUTER);
        }
    };
    ScaleStyle.prototype._onMajorTicksWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksWidth(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onMinorTicksWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksWidth(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onMajorTicksLengthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksLength(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onMinorTicksLengthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksLength(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onMajorTicksStrokeColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksStrokeColor(new color_1.Color(eventData.newValue).android);
        }
    };
    ScaleStyle.prototype._onМinorTicksStrokeColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTickStrokeColor(new color_1.Color(eventData.newValue).android);
        }
    };
    ScaleStyle.prototype._onMajorTicksFillColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksFillColor(new color_1.Color(eventData.newValue).android);
        }
    };
    ScaleStyle.prototype._onMinorTicksFillColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksFillColor(new color_1.Color(eventData.newValue).android);
        }
    };
    ScaleStyle.prototype._onМajorTicksStrokeWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getMajorTicksStrokePaint().setStrokeWidth(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onМinorTicksStrokeWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getMinorTicksStrokePaint().setStrokeWidth(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onLabelsVisiblePropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsVisible(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onLabelsCountPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsCount(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onLabelsLayoutModePropertyChanged = function (eventData) {
        if (!this.shouldUpdateNativeObject()) {
            return;
        }
        if (eventData.newValue == commonModule.ScaleLabelsLayoutMode.Inner) {
            this.owner.android.setLabelsLayoutMode(com.telerik.widget.scales.GaugeScaleLabelsLayoutMode.INNER);
        }
        else if (eventData.newValue == commonModule.ScaleLabelsLayoutMode.Outer) {
            this.owner.android.setLabelsLayoutMode(com.telerik.widget.scales.GaugeScaleLabelsLayoutMode.OUTER);
        }
    };
    ScaleStyle.prototype._onLabelsOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsOffset(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onLabelsSizePropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getLabelsPaint().setTextSize(eventData.newValue);
        }
    };
    ScaleStyle.prototype._onLabelsColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsColor(new color_1.Color(eventData.newValue).android);
        }
    };
    return ScaleStyle;
}(commonModule.ScaleStyle));
exports.ScaleStyle = ScaleStyle;
var TitleStyle = (function (_super) {
    __extends(TitleStyle, _super);
    function TitleStyle() {
        _super.apply(this, arguments);
    }
    TitleStyle.prototype._onTextSizePropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getTitle().setTextSize(eventData.newValue);
        }
    };
    TitleStyle.prototype._onTextColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getTitle().setTextColor(new color_1.Color(eventData.newValue).android);
        }
    };
    TitleStyle.prototype._onHorizontalOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTitleHorizontalOffset(eventData.newValue);
        }
    };
    TitleStyle.prototype._onVerticalOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTitleVerticalOffset(eventData.newValue);
        }
    };
    return TitleStyle;
}(commonModule.TitleStyle));
exports.TitleStyle = TitleStyle;
var SubtitleStyle = (function (_super) {
    __extends(SubtitleStyle, _super);
    function SubtitleStyle() {
        _super.apply(this, arguments);
    }
    SubtitleStyle.prototype._onTextSizePropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getSubtitle().setTextSize(eventData.newValue);
        }
    };
    SubtitleStyle.prototype._onTextColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getSubtitle().setTextColor(new color_1.Color(eventData.newValue).android);
        }
    };
    SubtitleStyle.prototype._onHorizontalOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setSubtitleHorizontalOffset(eventData.newValue);
        }
    };
    SubtitleStyle.prototype._onVerticalOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setSubtitleVerticalOffset(eventData.newValue);
        }
    };
    return SubtitleStyle;
}(commonModule.SubtitleStyle));
exports.SubtitleStyle = SubtitleStyle;
/////////////////////////// INDICATORS
var RadialNeedle = (function (_super) {
    __extends(RadialNeedle, _super);
    function RadialNeedle() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RadialNeedle.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialNeedle.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
            var gaugeView = value.owner;
            this._android = new com.telerik.widget.indicators.GaugeRadialNeedle(gaugeView._context);
            this.initializer.updateNativeObject(this);
            if (this.value != undefined) {
                this._android.setValue(this.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialNeedle.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadialNeedle.prototype._onValuePropertyChanged = function (eventData) {
        if (!this._android) {
            return;
        }
        this._android.setValue(eventData.newValue);
    };
    return RadialNeedle;
}(commonModule.RadialNeedle));
exports.RadialNeedle = RadialNeedle;
var NeedleStyle = (function (_super) {
    __extends(NeedleStyle, _super);
    function NeedleStyle() {
        _super.apply(this, arguments);
    }
    NeedleStyle.prototype._onLengthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLength(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onBottomWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setBottomWidth(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onTopWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTopWidth(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onCircleRadiusPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleRadius(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onCircleInnerRadiusPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleInnerRadius(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onOffsetPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setOffset(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onCircleFillColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleFillColor(new color_1.Color(eventData.newValue).android);
        }
    };
    NeedleStyle.prototype._onCircleStrokeColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleStrokeColor(new color_1.Color(eventData.newValue).android);
        }
    };
    NeedleStyle.prototype._onCircleStrokeWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getCircleStrokePaint().setStrokeWidth(eventData.newValue);
        }
    };
    NeedleStyle.prototype._onFillColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setFillColor(new color_1.Color(eventData.newValue).android);
        }
    };
    NeedleStyle.prototype._onStrokeColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeColor(new color_1.Color(eventData.newValue).android);
        }
    };
    NeedleStyle.prototype._onStrokeWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeWidth(eventData.newValue);
        }
    };
    return NeedleStyle;
}(commonModule.NeedleStyle));
exports.NeedleStyle = NeedleStyle;
var RadialBarIndicator = (function (_super) {
    __extends(RadialBarIndicator, _super);
    function RadialBarIndicator() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RadialBarIndicator.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
            var gaugeView = value.owner;
            this._android = new com.telerik.widget.indicators.GaugeRadialBarIndicator(gaugeView._context);
            this.initializer.updateNativeObject(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialBarIndicator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialBarIndicator.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return RadialBarIndicator;
}(commonModule.RadialBarIndicator));
exports.RadialBarIndicator = RadialBarIndicator;
var BarIndicatorStyle = (function (_super) {
    __extends(BarIndicatorStyle, _super);
    function BarIndicatorStyle() {
        _super.apply(this, arguments);
    }
    BarIndicatorStyle.prototype._onCapPropertyChanged = function (eventData) {
        if (!this.shouldUpdateNativeObject()) {
            return;
        }
        if (eventData.newValue == commonModule.BarIndicatorCapMode.Edge) {
            this.owner.android.setCap(com.telerik.widget.indicators.GaugeBarIndicatorCapMode.EDGE);
        }
        else if (eventData.newValue == commonModule.BarIndicatorCapMode.Round) {
            this.owner.android.setCap(com.telerik.widget.indicators.GaugeBarIndicatorCapMode.ROUND);
        }
    };
    BarIndicatorStyle.prototype._onBarWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setBarWidth(eventData.newValue);
        }
    };
    BarIndicatorStyle.prototype._onFillColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setFillColor(new color_1.Color(eventData.newValue).android);
        }
    };
    BarIndicatorStyle.prototype._onStrokeColorPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeColor(new color_1.Color(eventData.newValue).android);
        }
    };
    BarIndicatorStyle.prototype._onStrokeWidthPropertyChanged = function (eventData) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeWidth(eventData.newValue);
        }
    };
    return BarIndicatorStyle;
}(commonModule.BarIndicatorStyle));
exports.BarIndicatorStyle = BarIndicatorStyle;
//# sourceMappingURL=gauges.js.map