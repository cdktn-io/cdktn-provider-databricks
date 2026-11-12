# `lakewatchDatasource` Submodule <a name="`lakewatchDatasource` Submodule" id="@cdktn/provider-databricks.lakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchDatasource <a name="LakewatchDatasource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasource;

LakewatchDatasource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogName(java.lang.String)
    .datasourceName(java.lang.String)
    .schedule(LakewatchDatasourceSchedule)
    .schemaName(java.lang.String)
    .warehouseId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .autoloader(LakewatchDatasourceAutoloader)
//  .computeMode(java.lang.String)
//  .description(java.lang.String)
//  .existingTable(LakewatchDatasourceExistingTable)
//  .parsers(IResolvable|java.util.List<LakewatchDatasourceParsers>)
//  .providerConfig(LakewatchDatasourceProviderConfig)
//  .runAsPrincipal(java.lang.String)
//  .unityCatalogConnection(LakewatchDatasourceUnityCatalogConnection)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.datasourceName">datasourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.computeMode">computeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.parsers">parsers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.datasourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.warehouseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}.

---

##### `autoloader`<sup>Optional</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.autoloader"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}.

---

##### `computeMode`<sup>Optional</sup> <a name="computeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.computeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}.

---

##### `existingTable`<sup>Optional</sup> <a name="existingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.existingTable"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}.

---

##### `parsers`<sup>Optional</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.parsers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}.

---

##### `runAsPrincipal`<sup>Optional</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.runAsPrincipal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}.

---

##### `unityCatalogConnection`<sup>Optional</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.unityCatalogConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader">putAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable">putExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers">putParsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection">putUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader">resetAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode">resetComputeMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable">resetExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers">resetParsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal">resetRunAsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection">resetUnityCatalogConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoloader` <a name="putAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader"></a>

```java
public void putAutoloader(LakewatchDatasourceAutoloader value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `putExistingTable` <a name="putExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable"></a>

```java
public void putExistingTable(LakewatchDatasourceExistingTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `putParsers` <a name="putParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers"></a>

```java
public void putParsers(IResolvable|java.util.List<LakewatchDatasourceParsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig"></a>

```java
public void putProviderConfig(LakewatchDatasourceProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule"></a>

```java
public void putSchedule(LakewatchDatasourceSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `putUnityCatalogConnection` <a name="putUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection"></a>

```java
public void putUnityCatalogConnection(LakewatchDatasourceUnityCatalogConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAutoloader` <a name="resetAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader"></a>

```java
public void resetAutoloader()
```

##### `resetComputeMode` <a name="resetComputeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode"></a>

```java
public void resetComputeMode()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExistingTable` <a name="resetExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable"></a>

```java
public void resetExistingTable()
```

##### `resetParsers` <a name="resetParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers"></a>

```java
public void resetParsers()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetRunAsPrincipal` <a name="resetRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal"></a>

```java
public void resetRunAsPrincipal()
```

##### `resetUnityCatalogConnection` <a name="resetUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection"></a>

```java
public void resetUnityCatalogConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasource;

LakewatchDatasource.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasource;

LakewatchDatasource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasource;

LakewatchDatasource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasource;

LakewatchDatasource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LakewatchDatasource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LakewatchDatasource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId">datasourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName">effectiveDatasourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput">autoloaderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput">computeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput">datasourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput">existingTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput">parsersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput">runAsPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput">unityCatalogConnectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode">computeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName">datasourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader"></a>

```java
public LakewatchDatasourceAutoloaderOutputReference getAutoloader();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a>

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId"></a>

```java
public java.lang.String getComputeWorkspaceId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy"></a>

```java
public LakewatchDatasourceCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId"></a>

```java
public java.lang.String getDatasourceId();
```

- *Type:* java.lang.String

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName"></a>

```java
public java.lang.String getEffectiveCatalogName();
```

- *Type:* java.lang.String

---

##### `effectiveDatasourceName`<sup>Required</sup> <a name="effectiveDatasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName"></a>

```java
public java.lang.String getEffectiveDatasourceName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```java
public java.lang.String getEffectiveRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName"></a>

```java
public java.lang.String getEffectiveSchemaName();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `existingTable`<sup>Required</sup> <a name="existingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable"></a>

```java
public LakewatchDatasourceExistingTableOutputReference getExistingTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner"></a>

```java
public LakewatchDatasourceOwnerOutputReference getOwner();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers"></a>

```java
public LakewatchDatasourceParsersList getParsers();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig"></a>

```java
public LakewatchDatasourceProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule"></a>

```java
public LakewatchDatasourceScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status"></a>

```java
public LakewatchDatasourceStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a>

---

##### `unityCatalogConnection`<sup>Required</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection"></a>

```java
public LakewatchDatasourceUnityCatalogConnectionOutputReference getUnityCatalogConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy"></a>

```java
public LakewatchDatasourceUpdatedByOutputReference getUpdatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoloaderInput`<sup>Optional</sup> <a name="autoloaderInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput"></a>

```java
public IResolvable|LakewatchDatasourceAutoloader getAutoloaderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `computeModeInput`<sup>Optional</sup> <a name="computeModeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput"></a>

```java
public java.lang.String getComputeModeInput();
```

- *Type:* java.lang.String

---

##### `datasourceNameInput`<sup>Optional</sup> <a name="datasourceNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput"></a>

```java
public java.lang.String getDatasourceNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `existingTableInput`<sup>Optional</sup> <a name="existingTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput"></a>

```java
public IResolvable|LakewatchDatasourceExistingTable getExistingTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `parsersInput`<sup>Optional</sup> <a name="parsersInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput"></a>

```java
public IResolvable|java.util.List<LakewatchDatasourceParsers> getParsersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput"></a>

```java
public IResolvable|LakewatchDatasourceProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `runAsPrincipalInput`<sup>Optional</sup> <a name="runAsPrincipalInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput"></a>

```java
public java.lang.String getRunAsPrincipalInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput"></a>

```java
public IResolvable|LakewatchDatasourceSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `unityCatalogConnectionInput`<sup>Optional</sup> <a name="unityCatalogConnectionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput"></a>

```java
public IResolvable|LakewatchDatasourceUnityCatalogConnection getUnityCatalogConnectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `computeMode`<sup>Required</sup> <a name="computeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode"></a>

```java
public java.lang.String getComputeMode();
```

- *Type:* java.lang.String

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName"></a>

```java
public java.lang.String getDatasourceName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchDatasourceAutoloader <a name="LakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloader;

LakewatchDatasourceAutoloader.builder()
    .format(java.lang.String)
    .location(java.lang.String)
    .rawTable(LakewatchDatasourceAutoloaderRawTable)
//  .awsSecretScope(java.lang.String)
//  .envelope(LakewatchDatasourceAutoloaderEnvelope)
//  .formatOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .includeExistingFiles(java.lang.Boolean|IResolvable)
//  .overridePartitionColumns(java.util.List<java.lang.String>)
//  .queueUrl(java.lang.String)
//  .serviceCredentials(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope">awsSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions">formatOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles">includeExistingFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials">serviceCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}.

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable"></a>

```java
public LakewatchDatasourceAutoloaderRawTable getRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}.

---

##### `awsSecretScope`<sup>Optional</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```java
public java.lang.String getAwsSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope"></a>

```java
public LakewatchDatasourceAutoloaderEnvelope getEnvelope();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}.

---

##### `includeExistingFiles`<sup>Optional</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}.

---

##### `overridePartitionColumns`<sup>Optional</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}.

---

##### `serviceCredentials`<sup>Optional</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```java
public java.lang.String getServiceCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}.

---

### LakewatchDatasourceAutoloaderEffectiveRawTable <a name="LakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEffectiveRawTable;

LakewatchDatasourceAutoloaderEffectiveRawTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceAutoloaderEnvelope <a name="LakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEnvelope;

LakewatchDatasourceAutoloaderEnvelope.builder()
//  .cloudWatchLogs(LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs)
//  .jsonArray(LakewatchDatasourceAutoloaderEnvelopeJsonArray)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}. |

---

##### `cloudWatchLogs`<sup>Optional</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```java
public LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs getCloudWatchLogs();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}.

---

##### `jsonArray`<sup>Optional</sup> <a name="jsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```java
public LakewatchDatasourceAutoloaderEnvelopeJsonArray getJsonArray();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}.

---

### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;

LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.builder()
//  .headerRetention(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">headerRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}. |

---

##### `headerRetention`<sup>Optional</sup> <a name="headerRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}.

---

### LakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray;

LakewatchDatasourceAutoloaderEnvelopeJsonArray.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}.

---

### LakewatchDatasourceAutoloaderRawTable <a name="LakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderRawTable;

LakewatchDatasourceAutoloaderRawTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceConfig <a name="LakewatchDatasourceConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceConfig;

LakewatchDatasourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogName(java.lang.String)
    .datasourceName(java.lang.String)
    .schedule(LakewatchDatasourceSchedule)
    .schemaName(java.lang.String)
    .warehouseId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .autoloader(LakewatchDatasourceAutoloader)
//  .computeMode(java.lang.String)
//  .description(java.lang.String)
//  .existingTable(LakewatchDatasourceExistingTable)
//  .parsers(IResolvable|java.util.List<LakewatchDatasourceParsers>)
//  .providerConfig(LakewatchDatasourceProviderConfig)
//  .runAsPrincipal(java.lang.String)
//  .unityCatalogConnection(LakewatchDatasourceUnityCatalogConnection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName">datasourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode">computeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers">parsers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName"></a>

```java
public java.lang.String getDatasourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule"></a>

```java
public LakewatchDatasourceSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}.

---

##### `autoloader`<sup>Optional</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader"></a>

```java
public LakewatchDatasourceAutoloader getAutoloader();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}.

---

##### `computeMode`<sup>Optional</sup> <a name="computeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode"></a>

```java
public java.lang.String getComputeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}.

---

##### `existingTable`<sup>Optional</sup> <a name="existingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable"></a>

```java
public LakewatchDatasourceExistingTable getExistingTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}.

---

##### `parsers`<sup>Optional</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers"></a>

```java
public IResolvable|java.util.List<LakewatchDatasourceParsers> getParsers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig"></a>

```java
public LakewatchDatasourceProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}.

---

##### `runAsPrincipal`<sup>Optional</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}.

---

##### `unityCatalogConnection`<sup>Optional</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection"></a>

```java
public LakewatchDatasourceUnityCatalogConnection getUnityCatalogConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}.

---

### LakewatchDatasourceCreatedBy <a name="LakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceCreatedBy;

LakewatchDatasourceCreatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceExistingTable <a name="LakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceExistingTable;

LakewatchDatasourceExistingTable.builder()
    .name(java.lang.String)
//  .catalog(java.lang.String)
//  .includeExistingRows(java.lang.Boolean|IResolvable)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows">includeExistingRows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}.

---

##### `includeExistingRows`<sup>Optional</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}.

---

### LakewatchDatasourceOwner <a name="LakewatchDatasourceOwner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceOwner;

LakewatchDatasourceOwner.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceParsers <a name="LakewatchDatasourceParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsers;

LakewatchDatasourceParsers.builder()
    .id(java.lang.String)
    .version(java.lang.String)
//  .targetTable(LakewatchDatasourceParsersTargetTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable"></a>

```java
public LakewatchDatasourceParsersTargetTable getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}.

---

### LakewatchDatasourceParsersEffectiveTargetTable <a name="LakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsersEffectiveTargetTable;

LakewatchDatasourceParsersEffectiveTargetTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceParsersTargetTable <a name="LakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsersTargetTable;

LakewatchDatasourceParsersTargetTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceProviderConfig <a name="LakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceProviderConfig;

LakewatchDatasourceProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}.

---

### LakewatchDatasourceSchedule <a name="LakewatchDatasourceSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceSchedule;

LakewatchDatasourceSchedule.builder()
//  .atLeastEvery(java.lang.String)
//  .computeGroup(java.lang.String)
//  .continuous(java.lang.Boolean|IResolvable)
//  .cronExpression(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup">computeGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}.

---

##### `computeGroup`<sup>Optional</sup> <a name="computeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup"></a>

```java
public java.lang.String getComputeGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}.

---

### LakewatchDatasourceStatus <a name="LakewatchDatasourceStatus" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceStatus;

LakewatchDatasourceStatus.builder()
    .build();
```


### LakewatchDatasourceStatusIngestionJob <a name="LakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceStatusIngestionJob;

LakewatchDatasourceStatusIngestionJob.builder()
    .build();
```


### LakewatchDatasourceStatusIngestionPipeline <a name="LakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceStatusIngestionPipeline;

LakewatchDatasourceStatusIngestionPipeline.builder()
    .build();
```


### LakewatchDatasourceUnityCatalogConnection <a name="LakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceUnityCatalogConnection;

LakewatchDatasourceUnityCatalogConnection.builder()
    .connectionName(java.lang.String)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}.

---

### LakewatchDatasourceUpdatedBy <a name="LakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceUpdatedBy;

LakewatchDatasourceUpdatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference;

new LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceAutoloaderEffectiveRawTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference;

new LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">resetHeaderRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRetention` <a name="resetHeaderRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```java
public void resetHeaderRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">headerRetentionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">headerRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerRetentionInput`<sup>Optional</sup> <a name="headerRetentionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetentionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `headerRetention`<sup>Required</sup> <a name="headerRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference;

new LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeJsonArray getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### LakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference;

new LakewatchDatasourceAutoloaderEnvelopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">putCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">putJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">resetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">resetJsonArray</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLogs` <a name="putCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```java
public void putCloudWatchLogs(LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `putJsonArray` <a name="putJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```java
public void putJsonArray(LakewatchDatasourceAutoloaderEnvelopeJsonArray value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `resetCloudWatchLogs` <a name="resetCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```java
public void resetCloudWatchLogs()
```

##### `resetJsonArray` <a name="resetJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```java
public void resetJsonArray()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloudWatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">jsonArrayInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```java
public LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference getCloudWatchLogs();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `jsonArray`<sup>Required</sup> <a name="jsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```java
public LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference getJsonArray();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloudWatchLogsInput`<sup>Optional</sup> <a name="cloudWatchLogsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs getCloudWatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `jsonArrayInput`<sup>Optional</sup> <a name="jsonArrayInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeJsonArray getJsonArrayInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderEnvelope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---


### LakewatchDatasourceAutoloaderOutputReference <a name="LakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderOutputReference;

new LakewatchDatasourceAutoloaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope">putEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable">putRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">resetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope">resetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">resetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">resetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">resetServiceCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvelope` <a name="putEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```java
public void putEnvelope(LakewatchDatasourceAutoloaderEnvelope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `putRawTable` <a name="putRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```java
public void putRawTable(LakewatchDatasourceAutoloaderRawTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `resetAwsSecretScope` <a name="resetAwsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```java
public void resetAwsSecretScope()
```

##### `resetEnvelope` <a name="resetEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```java
public void resetEnvelope()
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```java
public void resetFormatOptions()
```

##### `resetIncludeExistingFiles` <a name="resetIncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```java
public void resetIncludeExistingFiles()
```

##### `resetOverridePartitionColumns` <a name="resetOverridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```java
public void resetOverridePartitionColumns()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```

##### `resetServiceCredentials` <a name="resetServiceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```java
public void resetServiceCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effectiveIncludeExistingFiles</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">effectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">awsSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">envelopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">includeExistingFilesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">overridePartitionColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">rawTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">serviceCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">awsSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions">formatOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">includeExistingFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">serviceCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveIncludeExistingFiles`<sup>Required</sup> <a name="effectiveIncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```java
public IResolvable getEffectiveIncludeExistingFiles();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveRawTable`<sup>Required</sup> <a name="effectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```java
public LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference getEffectiveRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```java
public LakewatchDatasourceAutoloaderEnvelopeOutputReference getEnvelope();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```java
public LakewatchDatasourceAutoloaderRawTableOutputReference getRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `awsSecretScopeInput`<sup>Optional</sup> <a name="awsSecretScopeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```java
public java.lang.String getAwsSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `envelopeInput`<sup>Optional</sup> <a name="envelopeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderEnvelope getEnvelopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeExistingFilesInput`<sup>Optional</sup> <a name="includeExistingFilesInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFilesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `overridePartitionColumnsInput`<sup>Optional</sup> <a name="overridePartitionColumnsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `rawTableInput`<sup>Optional</sup> <a name="rawTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderRawTable getRawTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `serviceCredentialsInput`<sup>Optional</sup> <a name="serviceCredentialsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```java
public java.lang.String getServiceCredentialsInput();
```

- *Type:* java.lang.String

---

##### `awsSecretScope`<sup>Required</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```java
public java.lang.String getAwsSecretScope();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeExistingFiles`<sup>Required</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `overridePartitionColumns`<sup>Required</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `serviceCredentials`<sup>Required</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```java
public java.lang.String getServiceCredentials();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceAutoloader getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---


### LakewatchDatasourceAutoloaderRawTableOutputReference <a name="LakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceAutoloaderRawTableOutputReference;

new LakewatchDatasourceAutoloaderRawTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceAutoloaderRawTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---


### LakewatchDatasourceCreatedByOutputReference <a name="LakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceCreatedByOutputReference;

new LakewatchDatasourceCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a>

---


### LakewatchDatasourceExistingTableOutputReference <a name="LakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceExistingTableOutputReference;

new LakewatchDatasourceExistingTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">resetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetIncludeExistingRows` <a name="resetIncludeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```java
public void resetIncludeExistingRows()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">effectiveCatalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName">effectiveName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">effectiveSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">includeExistingRowsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">includeExistingRows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveCatalog`<sup>Required</sup> <a name="effectiveCatalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```java
public java.lang.String getEffectiveCatalog();
```

- *Type:* java.lang.String

---

##### `effectiveName`<sup>Required</sup> <a name="effectiveName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```java
public java.lang.String getEffectiveName();
```

- *Type:* java.lang.String

---

##### `effectiveSchema`<sup>Required</sup> <a name="effectiveSchema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```java
public java.lang.String getEffectiveSchema();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `includeExistingRowsInput`<sup>Optional</sup> <a name="includeExistingRowsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRowsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `includeExistingRows`<sup>Required</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceExistingTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---


### LakewatchDatasourceOwnerOutputReference <a name="LakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceOwnerOutputReference;

new LakewatchDatasourceOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceOwner getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a>

---


### LakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="LakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference;

new LakewatchDatasourceParsersEffectiveTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceParsersEffectiveTargetTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a>

---


### LakewatchDatasourceParsersList <a name="LakewatchDatasourceParsersList" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsersList;

new LakewatchDatasourceParsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get"></a>

```java
public LakewatchDatasourceParsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LakewatchDatasourceParsers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>>

---


### LakewatchDatasourceParsersOutputReference <a name="LakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsersOutputReference;

new LakewatchDatasourceParsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```java
public void putTargetTable(LakewatchDatasourceParsersTargetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```java
public void resetTargetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">effectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveTargetTable`<sup>Required</sup> <a name="effectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```java
public LakewatchDatasourceParsersEffectiveTargetTableOutputReference getEffectiveTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```java
public LakewatchDatasourceParsersTargetTableOutputReference getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```java
public IResolvable|LakewatchDatasourceParsersTargetTable getTargetTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceParsers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>

---


### LakewatchDatasourceParsersTargetTableOutputReference <a name="LakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceParsersTargetTableOutputReference;

new LakewatchDatasourceParsersTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceParsersTargetTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---


### LakewatchDatasourceProviderConfigOutputReference <a name="LakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceProviderConfigOutputReference;

new LakewatchDatasourceProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---


### LakewatchDatasourceScheduleOutputReference <a name="LakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceScheduleOutputReference;

new LakewatchDatasourceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup">resetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```java
public void resetAtLeastEvery()
```

##### `resetComputeGroup` <a name="resetComputeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```java
public void resetComputeGroup()
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput">computeGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup">computeGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```java
public java.lang.String getAtLeastEveryInput();
```

- *Type:* java.lang.String

---

##### `computeGroupInput`<sup>Optional</sup> <a name="computeGroupInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```java
public java.lang.String getComputeGroupInput();
```

- *Type:* java.lang.String

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```java
public java.lang.Boolean|IResolvable getContinuousInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

---

##### `computeGroup`<sup>Required</sup> <a name="computeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```java
public java.lang.String getComputeGroup();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---


### LakewatchDatasourceStatusIngestionJobOutputReference <a name="LakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceStatusIngestionJobOutputReference;

new LakewatchDatasourceStatusIngestionJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceStatusIngestionJob getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a>

---


### LakewatchDatasourceStatusIngestionPipelineOutputReference <a name="LakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceStatusIngestionPipelineOutputReference;

new LakewatchDatasourceStatusIngestionPipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceStatusIngestionPipeline getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a>

---


### LakewatchDatasourceStatusOutputReference <a name="LakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceStatusOutputReference;

new LakewatchDatasourceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob">ingestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline">ingestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestionJob`<sup>Required</sup> <a name="ingestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```java
public LakewatchDatasourceStatusIngestionJobOutputReference getIngestionJob();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `ingestionPipeline`<sup>Required</sup> <a name="ingestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```java
public LakewatchDatasourceStatusIngestionPipelineOutputReference getIngestionPipeline();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a>

---


### LakewatchDatasourceUnityCatalogConnectionOutputReference <a name="LakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceUnityCatalogConnectionOutputReference;

new LakewatchDatasourceUnityCatalogConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">effectiveStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```java
public java.lang.String getConnector();
```

- *Type:* java.lang.String

---

##### `effectiveStartTime`<sup>Required</sup> <a name="effectiveStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```java
public java.lang.String getEffectiveStartTime();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchDatasourceUnityCatalogConnection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---


### LakewatchDatasourceUpdatedByOutputReference <a name="LakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_datasource.LakewatchDatasourceUpdatedByOutputReference;

new LakewatchDatasourceUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```java
public LakewatchDatasourceUpdatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a>

---



