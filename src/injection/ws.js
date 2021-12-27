WebSocket.prototype._send = WebSocket.prototype.send;
WebSocket.prototype.send = function (data) {
    //console.dir(data.length)
    //console.dir(+data);
    //console.dir(data.length)
    this._send(data);

    this.addEventListener('message', function (msg) {
        //console.log('in ' + msg.length);
    }, false);
}

shwartz = `iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQgFDrOnkhQRF76rnAYGBbmpmqeejLallseynSIYNBIIFcKwm6qgkDQII6KbjR0PMcKuoLiplbytl6yii7emkCAVKD0NKwoHFBMHDrCljpmOiBoQIpyUig4EDaaXja6hk8q1o6+fjysfMzEkOJuTgxYLHlIrOSsJITYqQaCXidDFtRcTKj0QIKudl7CllpeQeVw1NCcQLDMXL6qakhMRIioRNqCXfzISJDEOLK+fiqWakh4IGCMSIbKhlrynlpuajaucjZ2TesexoyMHICcZO9fLuz0yP6qbh2Y9PaCWkNTItzEUHaWdhh0YLl43OzMYOVgvMZeOgLWrlaWaglkwPXZFQaWkkAwKDDQrOFM2PScGGDQjLrOomigjOcvBsCcbID0qOg4JGzAIGJePcB8JKLuwoRoFDsW7qcKrl0I3RnJCS5GMdkkoLUglNj0cLqeZml47RDAkQZiSkSoEKHA9QTYaJUEkLj84NriunRQKKScOQ2Q6MykZLB0UGTEHM1AoMD4yMVUuJ2xCQ0k8SJaUiiwfJ7ShkKGiizgvMTojOCoUFaulkiUFDqOThU4xL2ZVXTkNND0gJMG2oraknUcxOT45KqGglEg8PS0qLjswSXtFSh4QEJubk9jLtQwKAlJDSzkxJiMhKxwaIZ2bhrSliK2ihBMVD6qefndIUFtNS4qEdEQkJDIqIl41J29AN0orQpKKgks9VGRRRHpaSY6JaUY/LW5WT2cyQGY+SxwIPHRdaH5mYVxNWisoGaWaeYBjUYdrWkwpHc28qFgzRzoOELqsjjggF21GIXJbXHZlUNPFr1VFVyEeEoJpbYt0cX1UKqujm4WDanJEC4pqS2hhUqaGf2Y5B5hwVZSVgW1dQXRpXF8nNZd9cVZIOUsZLkUwU6J5YHtMGZSJjD43GTQZRY50YTojTHp0WWZEXGhQM3VjP4FnPoBxfnh0a1pKGZh+f4J5YN3Pu4BNWsGxrqKKlrqRedi7naSDa3JkeYt6hFI0ELKIX/Pjy/HQrsaliLOQmDgiwbUAAAEAdFJOU/39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f2nve2UAABJcElEQVR42kyWT2jifBrHDSVRMIRWe0mR2kIOq9B4KAgVOmrBt7R4iYWcwlxE2uKh4Ml7ZTxICFjIUlB6SMtgT+1ukReVoQgFV0lw2FeQoTDLwMIcfHFLZ5wOtN39/mJnZx4TnWFw+un3z/OL4+r9xcVFFhMKxYWCT4hyRqXCcFxRlhm51C8puDCpvJLP07Qnn89nyvlyOTObwZQz008y+BeFmjsSqZgaO1pfZtgSu/KWYRguYOwE8BbwCZihNJSEgiCFhoWiXMIL05f7+CwW9ZKs60W9WMHoBjAqw1zB8R5s5+fAk9KhdNzniwpGlGMCBmcAsN8XS6W+QoEwr4ipVIrKp1JABA653TYYQcvTKYWiKJ73+/llr5f1M4sBNraa5JIcFwiALwA4abiwIEnD4cVQkKSsTy4SOrZEPuy7SOh03ahECWKlEI1GhznH+fn7q/fZC6KgJEhCvCAYBS4ZiEJDiNAveUUREvYVmxFC2mgQMZMBXrl8n5ndwN/vwbjbdc8ss4Qxxq6uLrKx5dgmy0SSSai3qBL5hAIIoWIoHpKGBtGvXyqVijaorOMqFgllhSN4lWi0EC3kHLcE8BwanmezEr4H/YWA4YtyAYZJMivsClFRLHlLVEoEoajQ+RmbMT9jvztdE5drbTMeWm+719fbzM3ashpbXFwMxGKxnZ0IF1BVNSyATxIggSSRe4G8M0lYJHuLU/FkggZfo8WooUM6AlcoDAF4nk2HiHxIYDge3jI4DrYwrNfrJVoQOmbdr4jwjxh9lKE9hG82n5lF+u5nZx8fH6uTpb21zc3niXPGnXnV7na7G07/un+VZWORJLe4GA4HFrd8KiAXiMcCwRv6WG8JyYOC0yDaIuq4iMvEX2I0sdjuR/ZKEOLg22HevmNZucTzJGxzbnhYLu/u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`
TextEncoder.prototype._encode = TextEncoder.prototype.encode;
TextEncoder.prototype.encode = function (data) {
    //console.dir(data)
    let prefix = data.substr(0, data.indexOf("{"))
    if (data.length > 3) {
        let js = JSON.parse(data.substr(data.indexOf("{")))

        //console.dir("▲ " + prefix)

        switch (prefix) {
            case "PIC":
                if (js["Pic"].length > 10) {
                    if (wsconfigreplacePicCheck.checked) {
                        js["Pic"] = shwartz
                    } else if (wsconfigdeletePicCheck.checked) {
                        delete js["Pic"]
                    }
                    //console.dir("ПОДМЕНА КАРТИНКИ")
                }

                if (js["ReportPics"].length > 10) {
                    if (wsconfigreplaceReportPicsCheck.checked) {
                        js["ReportPics"] = shwartz
                    } else if (wsconfigdeleteReportPicsCheck.checked) {
                        delete js["ReportPics"]
                    }
                    //console.dir("ПОДМЕНА КАРТИНКИ ДЛЯ РЕПОРТА")
                }
                return this._encode(prefix + JSON.stringify(js));
                break;
            // case "LOG":
            //     console.dir("ПЕРЕЗАПИСАТЬ")
            //     if (typeof asdas !== 'undefined') {
            //         connectionStatus.style.color = "red"
            //         js["AttachedData"] = "{\"Silenced\":true}"
            //     }
            //     return this._encode(prefix + JSON.stringify(js));

            //case "WRD":
                //js["Data"]["hasStream"] = "asdasd"
				//delete js["Data"]["hasStream"]
                //return this._encode(prefix + JSON.stringify(js));
            case "FIL":
                CO = js["Country"]
                return this._encode(data);
            case "DEA":
                last = Date.now()
                return this._encode(data);
            case "NXT":
                last = Date.now()
                return this._encode(data);
            default:
                return this._encode(data);
        }
    } else {
        return this._encode(data);
    }
};

last = 0
found = 0
TextDecoder.prototype._decode = TextDecoder.prototype.decode;
TextDecoder.prototype.decode = function (data) {
    let str = this._decode(data)
    let prefix = str.substr(0, str.indexOf("{"))
    let js = JSON.parse(str.substr(str.indexOf("{")))

    //console.dir("▼ " + prefix)
    //console.dir(str)
    //console.dir(js)

    switch (prefix) {
        case "":
            if (typeof js["AttachedData"] !== 'undefined') {
                remoteInfo.innerHTML = js["AttachedData"] + "<br>" + remoteInfo.innerHTML
            }
            // console.dir("DETECT")
            // console.dir(js)
            // //delete js["AttachedData"]
            // if (typeof js["AttachedData"] !== 'undefined') {
            //     asdas = true
            //     delete js["AttachedData"]
            // }

            // console.dir(prefix + JSON.stringify(js))
            // return prefix + JSON.stringify(js);
            return str;

        case "END":
            if (wsconfigtheyskipsoundCheck.checked)
                if (Date.now() - found > 5000 && Date.now() - last > 3000)
                    skip.play()
            return str;

        case "BGD":
            if (wsconfigskipwrongcountryCheck.checked) {
                if (js["Country"] !== CO) {
                    document.getElementsByClassName('buttons__button stop-button')[0].click()
                    setTimeout(() => {
                        document.getElementsByClassName('buttons__button start-button')[0].click()
                    }, 250)
                } else {
                    found = Date.now()
                }
            } else {
                found = Date.now()
            }
            return str;
        default:
            return str;
    }
};