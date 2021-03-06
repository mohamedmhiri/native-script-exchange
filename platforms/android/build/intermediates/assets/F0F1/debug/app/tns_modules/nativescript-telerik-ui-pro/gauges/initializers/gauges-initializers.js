var commonModule = require("../gauges-common");
var color_1 = require("color");
var observable_array_1 = require("data/observable-array");
var weakEvents = require("ui/core/weak-event-listener");
var RadGaugeValueMapper = (function () {
    function RadGaugeValueMapper() {
    }
    RadGaugeValueMapper.prototype.onTitleChanged = function (eventData, gauge) {
        if (!gauge.android) {
            return;
        }
        if (!eventData.newValue) {
            gauge.android.getTitle().setText("");
            return;
        }
        gauge.android.getTitle().setText(eventData.newValue);
    };
    RadGaugeValueMapper.prototype.onSubtitleChanged = function (eventData, gauge) {
        if (!gauge.android) {
            return;
        }
        if (!eventData.newValue) {
            gauge.android.getSubtitle().setText("");
            return;
        }
        gauge.android.getSubtitle().setText(eventData.newValue);
    };
    RadGaugeValueMapper.prototype.onTitleStyleChanged = function (eventData, gauge) {
        var style = eventData.newValue;
        style.owner = gauge;
        if (!gauge.android) {
            return;
        }
        this.applyTitleStyles(gauge);
    };
    RadGaugeValueMapper.prototype.onSubtitleStyleChanged = function (eventData, gauge) {
        var style = eventData.newValue;
        style.owner = gauge;
        if (!gauge.android) {
            return;
        }
        this.applySubtitleStyles(gauge);
    };
    RadGaugeValueMapper.prototype.updateNativeObject = function (gauge) {
        this.updateTitles(gauge);
        this.applyTitleStyles(gauge);
        this.applySubtitleStyles(gauge);
    };
    RadGaugeValueMapper.prototype.applySubtitleStyles = function (gauge) {
        if (!gauge.subtitleStyle) {
            return;
        }
        var style = gauge.subtitleStyle;
        if (style.textSize != undefined) {
            gauge.android.getSubtitle().setTextSize(style.textSize);
        }
        if (style.textColor != undefined) {
            gauge.android.getSubtitle().setTextColor(new color_1.Color(style.textColor).android);
        }
        if (style.horizontalOffset != undefined) {
            gauge.android.setSubtitleHorizontalOffset(style.horizontalOffset);
        }
        if (style.verticalOffset != undefined) {
            gauge.android.setSubtitleVerticalOffset(style.verticalOffset);
        }
    };
    RadGaugeValueMapper.prototype.applyTitleStyles = function (gauge) {
        if (!gauge.titleStyle) {
            return;
        }
        var style = gauge.titleStyle;
        if (style.textSize != undefined) {
            gauge.android.getTitle().setTextSize(style.textSize);
        }
        if (style.textColor != undefined) {
            gauge.android.getTitle().setTextColor(new color_1.Color(style.textColor).android);
        }
        if (style.horizontalOffset != undefined) {
            gauge.android.setTitleHorizontalOffset(style.horizontalOffset);
        }
        if (style.verticalOffset != undefined) {
            gauge.android.setTitleVerticalOffset(style.verticalOffset);
        }
    };
    RadGaugeValueMapper.prototype.updateTitles = function (gauge) {
        if (gauge.title) {
            gauge.android.getTitle().setText(gauge.title);
        }
        if (gauge.subtitle) {
            gauge.android.getSubtitle().setText(gauge.subtitle);
        }
    };
    return RadGaugeValueMapper;
}());
exports.RadGaugeValueMapper = RadGaugeValueMapper;
var GaugeScaleValueMapper = (function () {
    function GaugeScaleValueMapper() {
    }
    GaugeScaleValueMapper.prototype.onMinimumChanged = function (eventData, scale) {
        if (!scale.android) {
            return;
        }
        scale.android.setMinimum(eventData.newValue);
    };
    GaugeScaleValueMapper.prototype.onMaximumChanged = function (eventData, scale) {
        if (!scale.android) {
            return;
        }
        scale.android.setMaximum(eventData.newValue);
    };
    GaugeScaleValueMapper.prototype.onIndicatorsChange = function (eventData, scale) {
        if (!scale.android) {
            return;
        }
        if (eventData.oldValue) {
            weakEvents.removeWeakEventListener(eventData.oldValue, observable_array_1.ObservableArray.changeEvent, scale.indicatorsCollectionChanged, scale);
        }
        if (eventData.newValue) {
            weakEvents.addWeakEventListener(eventData.newValue, observable_array_1.ObservableArray.changeEvent, scale.indicatorsCollectionChanged, scale);
        }
        this.reloadIndicators(scale);
    };
    GaugeScaleValueMapper.prototype.onScaleStyleChanged = function (eventData, scale) {
        if (!scale.android) {
            return;
        }
        this.updateNativeStyle(eventData.newValue, scale);
    };
    GaugeScaleValueMapper.prototype.applyStylesToScale = function (style, scale) {
        if (style.lineColor != undefined) {
            scale.android.setStrokeColor(new color_1.Color(style.lineColor).android);
        }
        if (style.lineThickness != undefined) {
            if (style.lineThickness == 0) {
                scale.android.setLineVisible(false);
            }
            else {
                scale.android.setLineVisible(true);
            }
            scale.android.setStrokeWidth(style.lineThickness);
        }
        if (style.ticksVisible != undefined) {
            scale.android.setTicksVisible(style.ticksVisible);
        }
        if (style.majorTicksCount != undefined) {
            scale.android.setMajorTicksCount(style.majorTicksCount);
        }
        if (style.minorTicksCount != undefined) {
            scale.android.setMinorTicksCount(style.minorTicksCount);
        }
        if (style.ticksOffset != undefined) {
            scale.android.setTicksOffset(style.ticksOffset);
        }
        if (style.ticksLayoutMode != undefined) {
            if (style.ticksLayoutMode == commonModule.ScaleTicksLayoutMode.Inner) {
                scale.android.setTicksLayoutMode(com.telerik.widget.scales.GaugeScaleTicksLayoutMode.INNER);
            }
            else if (style.ticksLayoutMode == commonModule.ScaleTicksLayoutMode.Outer) {
                scale.android.setTicksLayoutMode(com.telerik.widget.scales.GaugeScaleTicksLayoutMode.OUTER);
            }
        }
        if (style.minorTicksFillColor != undefined) {
            scale.android.setMinorTicksFillColor(new color_1.Color(style.minorTicksFillColor).android);
        }
        if (style.minorTicksStrokeColor != undefined) {
            scale.android.setMinorTicksStrokeColor(new color_1.Color(style.minorTicksStrokeColor).android);
        }
        if (style.minorTicksStrokeWidth != undefined) {
            scale.android.getMinorTicksStrokePaint().setStrokeWidth(style.minorTicksStrokeWidth);
        }
        if (style.minorTicksWidth != undefined) {
            scale.android.setMinorTicksWidth(style.minorTicksWidth);
        }
        if (style.minorTicksLength != undefined) {
            scale.android.setMinorTicksLength(style.minorTicksLength);
        }
        if (style.majorTicksFillColor != undefined) {
            scale.android.setMajorTicksFillColor(new color_1.Color(style.majorTicksFillColor).android);
        }
        if (style.majorTicksStrokeColor != undefined) {
            scale.android.setMajorTicksStrokeColor(new color_1.Color(style.majorTicksStrokeColor).android);
        }
        if (style.majorTicksStrokeWidth != undefined) {
            scale.android.getMajorTicksStrokePaint().setStrokeWidth(style.majorTicksStrokeWidth);
        }
        if (style.majorTicksWidth != undefined) {
            scale.android.setMajorTicksWidth(style.majorTicksWidth);
        }
        if (style.majorTicksLength != undefined) {
            scale.android.setMajorTicksLength(style.majorTicksLength);
        }
        if (style.labelsVisible != undefined) {
            scale.android.setLabelsVisible(style.labelsVisible);
        }
        if (style.labelsCount != undefined) {
            scale.android.setLabelsCount(style.labelsCount);
        }
        if (style.labelsLayoutMode != undefined) {
            if (style.labelsLayoutMode == commonModule.ScaleLabelsLayoutMode.Inner) {
                scale.android.setLabelsLayoutMode(com.telerik.widget.scales.GaugeScaleLabelsLayoutMode.INNER);
            }
            else if (style.labelsLayoutMode == commonModule.ScaleLabelsLayoutMode.Outer) {
                scale.android.setLabelsLayoutMode(com.telerik.widget.scales.GaugeScaleLabelsLayoutMode.OUTER);
            }
        }
        if (style.labelsOffset != undefined) {
            scale.android.setLabelsOffset(style.labelsOffset);
        }
        if (style.labelsSize != undefined) {
            scale.android.getLabelsPaint().setTextSize(style.labelsSize);
        }
        if (style.labelsColor != undefined) {
            scale.android.setLabelsColor(new color_1.Color(style.labelsColor).android);
        }
    };
    GaugeScaleValueMapper.prototype.reloadIndicators = function (scale) {
        var indicators = scale.indicators;
        for (var i = 0; i < indicators.length; i++) {
            var indicator = indicators.getItem(i);
            if (!indicator.android) {
                indicator.owner = scale;
            }
            scale.android.addIndicator(indicator.android);
        }
    };
    GaugeScaleValueMapper.prototype.updateNativeObject = function (scale) {
        this.updateNativeMinimum(scale.minimum, scale);
        this.updateNativeMaximum(scale.maximum, scale);
        this.updateNativeStyle(scale.style, scale);
        this.updateNativeIndicators(scale.indicators, scale);
    };
    GaugeScaleValueMapper.prototype.updateNativeMinimum = function (min, scale) {
        if (min != undefined) {
            scale.android.setMinimum(min);
        }
    };
    GaugeScaleValueMapper.prototype.updateNativeMaximum = function (max, scale) {
        if (max != undefined) {
            scale.android.setMaximum(max);
        }
    };
    GaugeScaleValueMapper.prototype.updateNativeIndicators = function (indicators, scale) {
        if (indicators != undefined) {
            this.reloadIndicators(scale);
        }
    };
    GaugeScaleValueMapper.prototype.updateNativeStyle = function (style, scale) {
        // TODO this code repeats for ios and android => should reuse it.
        if (style == undefined) {
            return;
        }
        style.owner = scale;
        this.applyStylesToScale(style, scale);
    };
    return GaugeScaleValueMapper;
}());
exports.GaugeScaleValueMapper = GaugeScaleValueMapper;
var NeedleIndicatorValueMapper = (function () {
    function NeedleIndicatorValueMapper() {
    }
    NeedleIndicatorValueMapper.prototype.onNeedleStyleChanged = function (eventData, needle) {
        if (!needle.android) {
            return;
        }
        this.applyStyles(eventData.newValue, needle);
    };
    NeedleIndicatorValueMapper.prototype.onIsAnimatedChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateIsAnimated(eventData.newValue, indicator);
    };
    NeedleIndicatorValueMapper.prototype.onAnimationDurationChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateAnimationDuration(eventData.newValue, indicator);
    };
    NeedleIndicatorValueMapper.prototype.updateNativeObject = function (needle) {
        this.applyStyles(needle.style, needle);
        this.updateIsAnimated(needle.isAnimated, needle);
        this.updateAnimationDuration(needle.animationDuration, needle);
    };
    NeedleIndicatorValueMapper.prototype.updateAnimationDuration = function (value, indicator) {
        if (value == undefined) {
            return;
        }
        indicator.android.setAnimationDuration(value);
    };
    NeedleIndicatorValueMapper.prototype.updateIsAnimated = function (value, indicator) {
        if (value == undefined) {
            return;
        }
        indicator.android.setAnimated(value);
    };
    NeedleIndicatorValueMapper.prototype.applyStyles = function (style, needle) {
        if (!style) {
            return;
        }
        style.owner = needle;
        if (style.length != undefined) {
            needle.android.setLength(style.length);
        }
        if (style.bottomWidth != undefined) {
            needle.android.setBottomWidth(style.bottomWidth);
        }
        if (style.topWidth != undefined) {
            needle.android.setTopWidth(style.topWidth);
        }
        if (style.circleRadius != undefined) {
            needle.android.setCircleRadius(style.circleRadius);
        }
        if (style.circleInnerRadius != undefined) {
            needle.android.setCircleInnerRadius(style.circleInnerRadius);
        }
        if (style.offset != undefined) {
            needle.android.setOffset(style.offset);
        }
        if (style.circleFillColor) {
            needle.android.setCircleFillColor(new color_1.Color(style.circleFillColor).android);
        }
        if (style.circleStrokeColor) {
            needle.android.setCircleStrokeColor(new color_1.Color(style.circleStrokeColor).android);
        }
        if (style.circleStrokeWidth != undefined) {
            needle.android.setCircleStrokeWidth(style.circleStrokeWidth);
        }
        if (style.fillColor) {
            needle.android.setFillColor(new color_1.Color(style.fillColor).android);
        }
        if (style.strokeColor) {
            needle.android.setStrokeColor(new color_1.Color(style.strokeColor).android);
        }
        if (style.strokeWidth) {
            needle.android.setStrokeWidth(style.strokeWidth);
        }
    };
    return NeedleIndicatorValueMapper;
}());
exports.NeedleIndicatorValueMapper = NeedleIndicatorValueMapper;
var BarIndicatorValueMapper = (function () {
    function BarIndicatorValueMapper() {
    }
    BarIndicatorValueMapper.prototype.onMinimumValueChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateMinimum(eventData.newValue, indicator);
    };
    BarIndicatorValueMapper.prototype.onMaximumValueChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateMaximum(eventData.newValue, indicator);
    };
    BarIndicatorValueMapper.prototype.onBarStyleChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.applyStyles(eventData.newValue, indicator);
    };
    BarIndicatorValueMapper.prototype.onLocationChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateLocation(eventData.newValue, indicator);
    };
    BarIndicatorValueMapper.prototype.onIsAnimatedChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateIsAnimated(eventData.newValue, indicator);
    };
    BarIndicatorValueMapper.prototype.onAnimationDurationChanged = function (eventData, indicator) {
        if (!indicator.android) {
            return;
        }
        this.updateAnimationDuration(eventData.newValue, indicator);
    };
    BarIndicatorValueMapper.prototype.updateAnimationDuration = function (value, indicator) {
        if (value == undefined) {
            return;
        }
        indicator.android.setAnimationDuration(value);
    };
    BarIndicatorValueMapper.prototype.updateIsAnimated = function (value, indicator) {
        if (value == undefined) {
            return;
        }
        indicator.android.setAnimated(value);
    };
    BarIndicatorValueMapper.prototype.applyStyles = function (style, indicator) {
        if (!style) {
            return;
        }
        style.owner = indicator;
        if (style.cap) {
            if (style.cap == commonModule.BarIndicatorCapMode.Edge) {
                indicator.android.setCap(com.telerik.widget.indicators.GaugeBarIndicatorCapMode.EDGE);
            }
            else if (style.cap == commonModule.BarIndicatorCapMode.Round) {
                indicator.android.setCap(com.telerik.widget.indicators.GaugeBarIndicatorCapMode.ROUND);
            }
        }
        if (style.barWidth != undefined) {
            indicator.android.setBarWidth(style.barWidth);
        }
        if (style.fillColor) {
            indicator.android.setFillColor(new color_1.Color(style.fillColor).android);
        }
        if (style.strokeColor) {
            indicator.android.setStrokeColor(new color_1.Color(style.strokeColor).android);
        }
        if (style.strokeWidth) {
            indicator.android.setStrokeWidth(style.strokeWidth);
        }
    };
    BarIndicatorValueMapper.prototype.updateMinimum = function (newMinimum, indicator) {
        if (newMinimum != undefined) {
            indicator.android.setMinimum(newMinimum);
        }
    };
    BarIndicatorValueMapper.prototype.updateMaximum = function (newMaximum, indicator) {
        if (newMaximum != undefined) {
            indicator.android.setMaximum(newMaximum);
        }
    };
    BarIndicatorValueMapper.prototype.updateLocation = function (newLocation, indicator) {
        if (newLocation != undefined) {
            indicator.android.setLocation(newLocation);
        }
    };
    BarIndicatorValueMapper.prototype.updateNativeObject = function (barIndicator) {
        this.applyStyles(barIndicator.style, barIndicator);
        this.updateIsAnimated(barIndicator.isAnimated, barIndicator);
        this.updateAnimationDuration(barIndicator.animationDuration, barIndicator);
        this.updateLocation(barIndicator.location, barIndicator);
        this.updateMinimum(barIndicator.minimum, barIndicator);
        this.updateMaximum(barIndicator.maximum, barIndicator);
    };
    return BarIndicatorValueMapper;
}());
exports.BarIndicatorValueMapper = BarIndicatorValueMapper;
//# sourceMappingURL=gauges-initializers.js.map