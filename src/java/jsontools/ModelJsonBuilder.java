

package jsontools;

import entity.Model;
import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;


public class ModelJsonBuilder {
    public JsonObject getJsonModel(Model model){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", model.getId());
        job.add("model-name", model.getName());
        job.add("model-brand",model.getBrand());
        job.add("model-price", model.getPrice());
        job.add("model-size", model.getSize());
        job.add("model-amount", model.getAmount());
        return job.build();
    }
    public JsonArray getJsonArrayModel(List<Model> listModelData){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i = 0; i < listModelData.size(); i++){
            jab.add(getJsonModel(listModelData.get(i)));
        }
        return jab.build();
    }
}
