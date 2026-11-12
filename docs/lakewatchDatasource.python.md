# `lakewatchDatasource` Submodule <a name="`lakewatchDatasource` Submodule" id="@cdktn/provider-databricks.lakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchDatasource <a name="LakewatchDatasource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str,
  datasource_name: str,
  schedule: LakewatchDatasourceSchedule,
  schema_name: str,
  warehouse_id: str,
  annotations: typing.Mapping[str] = None,
  autoloader: LakewatchDatasourceAutoloader = None,
  compute_mode: str = None,
  description: str = None,
  existing_table: LakewatchDatasourceExistingTable = None,
  parsers: IResolvable | typing.List[LakewatchDatasourceParsers] = None,
  provider_config: LakewatchDatasourceProviderConfig = None,
  run_as_principal: str = None,
  unity_catalog_connection: LakewatchDatasourceUnityCatalogConnection = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.datasourceName">datasource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.computeMode">compute_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.existingTable">existing_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.parsers">parsers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.unityCatalogConnection">unity_catalog_connection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `datasource_name`<sup>Required</sup> <a name="datasource_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.datasourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}.

---

##### `autoloader`<sup>Optional</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.autoloader"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}.

---

##### `compute_mode`<sup>Optional</sup> <a name="compute_mode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.computeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}.

---

##### `existing_table`<sup>Optional</sup> <a name="existing_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.existingTable"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}.

---

##### `parsers`<sup>Optional</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.parsers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}.

---

##### `run_as_principal`<sup>Optional</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.runAsPrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}.

---

##### `unity_catalog_connection`<sup>Optional</sup> <a name="unity_catalog_connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.unityCatalogConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader">put_autoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable">put_existing_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers">put_parsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection">put_unity_catalog_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader">reset_autoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode">reset_compute_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable">reset_existing_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers">reset_parsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal">reset_run_as_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection">reset_unity_catalog_connection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoloader` <a name="put_autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader"></a>

```python
def put_autoloader(
  format: str,
  location: str,
  raw_table: LakewatchDatasourceAutoloaderRawTable,
  aws_secret_scope: str = None,
  envelope: LakewatchDatasourceAutoloaderEnvelope = None,
  format_options: typing.Mapping[str] = None,
  include_existing_files: bool | IResolvable = None,
  override_partition_columns: typing.List[str] = None,
  queue_url: str = None,
  service_credentials: str = None
) -> None
```

###### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}.

---

###### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}.

---

###### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.rawTable"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}.

---

###### `aws_secret_scope`<sup>Optional</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.awsSecretScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}.

---

###### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.envelope"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}.

---

###### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.formatOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}.

---

###### `include_existing_files`<sup>Optional</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.includeExistingFiles"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}.

---

###### `override_partition_columns`<sup>Optional</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.overridePartitionColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}.

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}.

---

###### `service_credentials`<sup>Optional</sup> <a name="service_credentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.serviceCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}.

---

##### `put_existing_table` <a name="put_existing_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable"></a>

```python
def put_existing_table(
  name: str,
  catalog: str = None,
  include_existing_rows: bool | IResolvable = None,
  schema: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}.

---

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}.

---

###### `include_existing_rows`<sup>Optional</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.includeExistingRows"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}.

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}.

---

##### `put_parsers` <a name="put_parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers"></a>

```python
def put_parsers(
  value: IResolvable | typing.List[LakewatchDatasourceParsers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule"></a>

```python
def put_schedule(
  at_least_every: str = None,
  compute_group: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.atLeastEvery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}.

---

###### `compute_group`<sup>Optional</sup> <a name="compute_group" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.computeGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}.

---

###### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.continuous"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}.

---

###### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.cronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}.

---

##### `put_unity_catalog_connection` <a name="put_unity_catalog_connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection"></a>

```python
def put_unity_catalog_connection(
  connection_name: str,
  configuration: typing.Mapping[str] = None,
  start_time: str = None
) -> None
```

###### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection.parameter.connectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}.

---

###### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection.parameter.configuration"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_autoloader` <a name="reset_autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader"></a>

```python
def reset_autoloader() -> None
```

##### `reset_compute_mode` <a name="reset_compute_mode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode"></a>

```python
def reset_compute_mode() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_existing_table` <a name="reset_existing_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable"></a>

```python
def reset_existing_table() -> None
```

##### `reset_parsers` <a name="reset_parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers"></a>

```python
def reset_parsers() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_run_as_principal` <a name="reset_run_as_principal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal"></a>

```python
def reset_run_as_principal() -> None
```

##### `reset_unity_catalog_connection` <a name="reset_unity_catalog_connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection"></a>

```python
def reset_unity_catalog_connection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasource.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakewatchDatasource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId">compute_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId">datasource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName">effective_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName">effective_datasource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal">effective_run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName">effective_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable">existing_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection">unity_catalog_connection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput">autoloader_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput">compute_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput">datasource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput">existing_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput">parsers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput">run_as_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput">unity_catalog_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode">compute_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName">datasource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader"></a>

```python
autoloader: LakewatchDatasourceAutoloaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a>

---

##### `compute_workspace_id`<sup>Required</sup> <a name="compute_workspace_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId"></a>

```python
compute_workspace_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy"></a>

```python
created_by: LakewatchDatasourceCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `datasource_id`<sup>Required</sup> <a name="datasource_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId"></a>

```python
datasource_id: str
```

- *Type:* str

---

##### `effective_catalog_name`<sup>Required</sup> <a name="effective_catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName"></a>

```python
effective_catalog_name: str
```

- *Type:* str

---

##### `effective_datasource_name`<sup>Required</sup> <a name="effective_datasource_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName"></a>

```python
effective_datasource_name: str
```

- *Type:* str

---

##### `effective_run_as_principal`<sup>Required</sup> <a name="effective_run_as_principal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```python
effective_run_as_principal: str
```

- *Type:* str

---

##### `effective_schema_name`<sup>Required</sup> <a name="effective_schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName"></a>

```python
effective_schema_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `existing_table`<sup>Required</sup> <a name="existing_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable"></a>

```python
existing_table: LakewatchDatasourceExistingTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner"></a>

```python
owner: LakewatchDatasourceOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers"></a>

```python
parsers: LakewatchDatasourceParsersList
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig"></a>

```python
provider_config: LakewatchDatasourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule"></a>

```python
schedule: LakewatchDatasourceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status"></a>

```python
status: LakewatchDatasourceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a>

---

##### `unity_catalog_connection`<sup>Required</sup> <a name="unity_catalog_connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection"></a>

```python
unity_catalog_connection: LakewatchDatasourceUnityCatalogConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy"></a>

```python
updated_by: LakewatchDatasourceUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `autoloader_input`<sup>Optional</sup> <a name="autoloader_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput"></a>

```python
autoloader_input: IResolvable | LakewatchDatasourceAutoloader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `compute_mode_input`<sup>Optional</sup> <a name="compute_mode_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput"></a>

```python
compute_mode_input: str
```

- *Type:* str

---

##### `datasource_name_input`<sup>Optional</sup> <a name="datasource_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput"></a>

```python
datasource_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `existing_table_input`<sup>Optional</sup> <a name="existing_table_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput"></a>

```python
existing_table_input: IResolvable | LakewatchDatasourceExistingTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `parsers_input`<sup>Optional</sup> <a name="parsers_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput"></a>

```python
parsers_input: IResolvable | typing.List[LakewatchDatasourceParsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | LakewatchDatasourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `run_as_principal_input`<sup>Optional</sup> <a name="run_as_principal_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput"></a>

```python
run_as_principal_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput"></a>

```python
schedule_input: IResolvable | LakewatchDatasourceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `unity_catalog_connection_input`<sup>Optional</sup> <a name="unity_catalog_connection_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput"></a>

```python
unity_catalog_connection_input: IResolvable | LakewatchDatasourceUnityCatalogConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `compute_mode`<sup>Required</sup> <a name="compute_mode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode"></a>

```python
compute_mode: str
```

- *Type:* str

---

##### `datasource_name`<sup>Required</sup> <a name="datasource_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName"></a>

```python
datasource_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `run_as_principal`<sup>Required</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchDatasourceAutoloader <a name="LakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloader(
  format: str,
  location: str,
  raw_table: LakewatchDatasourceAutoloaderRawTable,
  aws_secret_scope: str = None,
  envelope: LakewatchDatasourceAutoloaderEnvelope = None,
  format_options: typing.Mapping[str] = None,
  include_existing_files: bool | IResolvable = None,
  override_partition_columns: typing.List[str] = None,
  queue_url: str = None,
  service_credentials: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable">raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope">aws_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions">format_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles">include_existing_files</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns">override_partition_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials">service_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}.

---

##### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable"></a>

```python
raw_table: LakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}.

---

##### `aws_secret_scope`<sup>Optional</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```python
aws_secret_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope"></a>

```python
envelope: LakewatchDatasourceAutoloaderEnvelope
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}.

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions"></a>

```python
format_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}.

---

##### `include_existing_files`<sup>Optional</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```python
include_existing_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}.

---

##### `override_partition_columns`<sup>Optional</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```python
override_partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}.

---

##### `service_credentials`<sup>Optional</sup> <a name="service_credentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```python
service_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}.

---

### LakewatchDatasourceAutoloaderEffectiveRawTable <a name="LakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceAutoloaderEnvelope <a name="LakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope(
  cloud_watch_logs: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs = None,
  json_array: LakewatchDatasourceAutoloaderEnvelopeJsonArray = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">cloud_watch_logs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray">json_array</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}. |

---

##### `cloud_watch_logs`<sup>Optional</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```python
cloud_watch_logs: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}.

---

##### `json_array`<sup>Optional</sup> <a name="json_array" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```python
json_array: LakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}.

---

### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs(
  header_retention: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">header_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}. |

---

##### `header_retention`<sup>Optional</sup> <a name="header_retention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```python
header_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}.

---

### LakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}.

---

### LakewatchDatasourceAutoloaderRawTable <a name="LakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceConfig <a name="LakewatchDatasourceConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str,
  datasource_name: str,
  schedule: LakewatchDatasourceSchedule,
  schema_name: str,
  warehouse_id: str,
  annotations: typing.Mapping[str] = None,
  autoloader: LakewatchDatasourceAutoloader = None,
  compute_mode: str = None,
  description: str = None,
  existing_table: LakewatchDatasourceExistingTable = None,
  parsers: IResolvable | typing.List[LakewatchDatasourceParsers] = None,
  provider_config: LakewatchDatasourceProviderConfig = None,
  run_as_principal: str = None,
  unity_catalog_connection: LakewatchDatasourceUnityCatalogConnection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName">datasource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode">compute_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable">existing_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers">parsers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection">unity_catalog_connection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `datasource_name`<sup>Required</sup> <a name="datasource_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName"></a>

```python
datasource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule"></a>

```python
schedule: LakewatchDatasourceSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}.

---

##### `autoloader`<sup>Optional</sup> <a name="autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader"></a>

```python
autoloader: LakewatchDatasourceAutoloader
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}.

---

##### `compute_mode`<sup>Optional</sup> <a name="compute_mode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode"></a>

```python
compute_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}.

---

##### `existing_table`<sup>Optional</sup> <a name="existing_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable"></a>

```python
existing_table: LakewatchDatasourceExistingTable
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}.

---

##### `parsers`<sup>Optional</sup> <a name="parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers"></a>

```python
parsers: IResolvable | typing.List[LakewatchDatasourceParsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig"></a>

```python
provider_config: LakewatchDatasourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}.

---

##### `run_as_principal`<sup>Optional</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}.

---

##### `unity_catalog_connection`<sup>Optional</sup> <a name="unity_catalog_connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection"></a>

```python
unity_catalog_connection: LakewatchDatasourceUnityCatalogConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}.

---

### LakewatchDatasourceCreatedBy <a name="LakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceCreatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceExistingTable <a name="LakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceExistingTable(
  name: str,
  catalog: str = None,
  include_existing_rows: bool | IResolvable = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows">include_existing_rows</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}.

---

##### `include_existing_rows`<sup>Optional</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```python
include_existing_rows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}.

---

### LakewatchDatasourceOwner <a name="LakewatchDatasourceOwner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceOwner(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceParsers <a name="LakewatchDatasourceParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsers(
  id: str,
  version: str,
  target_table: LakewatchDatasourceParsersTargetTable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable"></a>

```python
target_table: LakewatchDatasourceParsersTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}.

---

### LakewatchDatasourceParsersEffectiveTargetTable <a name="LakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceParsersTargetTable <a name="LakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsersTargetTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceProviderConfig <a name="LakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}.

---

### LakewatchDatasourceSchedule <a name="LakewatchDatasourceSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceSchedule(
  at_least_every: str = None,
  compute_group: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup">compute_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}.

---

##### `compute_group`<sup>Optional</sup> <a name="compute_group" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup"></a>

```python
compute_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}.

---

### LakewatchDatasourceStatus <a name="LakewatchDatasourceStatus" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceStatus()
```


### LakewatchDatasourceStatusIngestionJob <a name="LakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceStatusIngestionJob()
```


### LakewatchDatasourceStatusIngestionPipeline <a name="LakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline()
```


### LakewatchDatasourceUnityCatalogConnection <a name="LakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection(
  connection_name: str,
  configuration: typing.Mapping[str] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}. |

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}.

---

### LakewatchDatasourceUpdatedBy <a name="LakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceAutoloaderEffectiveRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">reset_header_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_retention` <a name="reset_header_retention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```python
def reset_header_retention() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">header_retention_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">header_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_retention_input`<sup>Optional</sup> <a name="header_retention_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```python
header_retention_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header_retention`<sup>Required</sup> <a name="header_retention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```python
header_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### LakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">put_cloud_watch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">put_json_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">reset_cloud_watch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">reset_json_array</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_watch_logs` <a name="put_cloud_watch_logs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```python
def put_cloud_watch_logs(
  header_retention: bool | IResolvable = None
) -> None
```

###### `header_retention`<sup>Optional</sup> <a name="header_retention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.headerRetention"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}.

---

##### `put_json_array` <a name="put_json_array" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```python
def put_json_array(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}.

---

##### `reset_cloud_watch_logs` <a name="reset_cloud_watch_logs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```python
def reset_cloud_watch_logs() -> None
```

##### `reset_json_array` <a name="reset_json_array" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```python
def reset_json_array() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloud_watch_logs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">json_array</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloud_watch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">json_array_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_logs`<sup>Required</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```python
cloud_watch_logs: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `json_array`<sup>Required</sup> <a name="json_array" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```python
json_array: LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloud_watch_logs_input`<sup>Optional</sup> <a name="cloud_watch_logs_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```python
cloud_watch_logs_input: IResolvable | LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `json_array_input`<sup>Optional</sup> <a name="json_array_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```python
json_array_input: IResolvable | LakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceAutoloaderEnvelope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---


### LakewatchDatasourceAutoloaderOutputReference <a name="LakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope">put_envelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable">put_raw_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">reset_aws_secret_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope">reset_envelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">reset_include_existing_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">reset_override_partition_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">reset_service_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_envelope` <a name="put_envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```python
def put_envelope(
  cloud_watch_logs: LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs = None,
  json_array: LakewatchDatasourceAutoloaderEnvelopeJsonArray = None
) -> None
```

###### `cloud_watch_logs`<sup>Optional</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.cloudWatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}.

---

###### `json_array`<sup>Optional</sup> <a name="json_array" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.jsonArray"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}.

---

##### `put_raw_table` <a name="put_raw_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```python
def put_raw_table(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `reset_aws_secret_scope` <a name="reset_aws_secret_scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```python
def reset_aws_secret_scope() -> None
```

##### `reset_envelope` <a name="reset_envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```python
def reset_envelope() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_include_existing_files` <a name="reset_include_existing_files" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```python
def reset_include_existing_files() -> None
```

##### `reset_override_partition_columns` <a name="reset_override_partition_columns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```python
def reset_override_partition_columns() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```

##### `reset_service_credentials` <a name="reset_service_credentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```python
def reset_service_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effective_include_existing_files</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">effective_raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable">raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">aws_secret_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">envelope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">format_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">include_existing_files_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">override_partition_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">raw_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">service_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">aws_secret_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions">format_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">include_existing_files</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">override_partition_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">service_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_include_existing_files`<sup>Required</sup> <a name="effective_include_existing_files" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```python
effective_include_existing_files: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_raw_table`<sup>Required</sup> <a name="effective_raw_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```python
effective_raw_table: LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```python
envelope: LakewatchDatasourceAutoloaderEnvelopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```python
raw_table: LakewatchDatasourceAutoloaderRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `aws_secret_scope_input`<sup>Optional</sup> <a name="aws_secret_scope_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```python
aws_secret_scope_input: str
```

- *Type:* str

---

##### `envelope_input`<sup>Optional</sup> <a name="envelope_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```python
envelope_input: IResolvable | LakewatchDatasourceAutoloaderEnvelope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```python
format_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_existing_files_input`<sup>Optional</sup> <a name="include_existing_files_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```python
include_existing_files_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `override_partition_columns_input`<sup>Optional</sup> <a name="override_partition_columns_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```python
override_partition_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `raw_table_input`<sup>Optional</sup> <a name="raw_table_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```python
raw_table_input: IResolvable | LakewatchDatasourceAutoloaderRawTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `service_credentials_input`<sup>Optional</sup> <a name="service_credentials_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```python
service_credentials_input: str
```

- *Type:* str

---

##### `aws_secret_scope`<sup>Required</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```python
aws_secret_scope: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```python
format_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_existing_files`<sup>Required</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```python
include_existing_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `override_partition_columns`<sup>Required</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```python
override_partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `service_credentials`<sup>Required</sup> <a name="service_credentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```python
service_credentials: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceAutoloader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---


### LakewatchDatasourceAutoloaderRawTableOutputReference <a name="LakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceAutoloaderRawTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---


### LakewatchDatasourceCreatedByOutputReference <a name="LakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a>

---


### LakewatchDatasourceExistingTableOutputReference <a name="LakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">reset_include_existing_rows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_include_existing_rows` <a name="reset_include_existing_rows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```python
def reset_include_existing_rows() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">effective_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName">effective_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">effective_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">include_existing_rows_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">include_existing_rows</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_catalog`<sup>Required</sup> <a name="effective_catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```python
effective_catalog: str
```

- *Type:* str

---

##### `effective_name`<sup>Required</sup> <a name="effective_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```python
effective_name: str
```

- *Type:* str

---

##### `effective_schema`<sup>Required</sup> <a name="effective_schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```python
effective_schema: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `include_existing_rows_input`<sup>Optional</sup> <a name="include_existing_rows_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```python
include_existing_rows_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `include_existing_rows`<sup>Required</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```python
include_existing_rows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceExistingTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---


### LakewatchDatasourceOwnerOutputReference <a name="LakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a>

---


### LakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="LakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceParsersEffectiveTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a>

---


### LakewatchDatasourceParsersList <a name="LakewatchDatasourceParsersList" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakewatchDatasourceParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LakewatchDatasourceParsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>]

---


### LakewatchDatasourceParsersOutputReference <a name="LakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable">put_target_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable">reset_target_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_table` <a name="put_target_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```python
def put_target_table(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `reset_target_table` <a name="reset_target_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```python
def reset_target_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">effective_target_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput">target_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_target_table`<sup>Required</sup> <a name="effective_target_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```python
effective_target_table: LakewatchDatasourceParsersEffectiveTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```python
target_table: LakewatchDatasourceParsersTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_table_input`<sup>Optional</sup> <a name="target_table_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```python
target_table_input: IResolvable | LakewatchDatasourceParsersTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceParsers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>

---


### LakewatchDatasourceParsersTargetTableOutputReference <a name="LakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceParsersTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---


### LakewatchDatasourceProviderConfigOutputReference <a name="LakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---


### LakewatchDatasourceScheduleOutputReference <a name="LakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup">reset_compute_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_compute_group` <a name="reset_compute_group" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```python
def reset_compute_group() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput">compute_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup">compute_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `compute_group_input`<sup>Optional</sup> <a name="compute_group_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```python
compute_group_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `compute_group`<sup>Required</sup> <a name="compute_group" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```python
compute_group: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---


### LakewatchDatasourceStatusIngestionJobOutputReference <a name="LakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceStatusIngestionJob
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a>

---


### LakewatchDatasourceStatusIngestionPipelineOutputReference <a name="LakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceStatusIngestionPipeline
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a>

---


### LakewatchDatasourceStatusOutputReference <a name="LakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob">ingestion_job</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline">ingestion_pipeline</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_job`<sup>Required</sup> <a name="ingestion_job" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```python
ingestion_job: LakewatchDatasourceStatusIngestionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `ingestion_pipeline`<sup>Required</sup> <a name="ingestion_pipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```python
ingestion_pipeline: LakewatchDatasourceStatusIngestionPipelineOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a>

---


### LakewatchDatasourceUnityCatalogConnectionOutputReference <a name="LakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">effective_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```python
connector: str
```

- *Type:* str

---

##### `effective_start_time`<sup>Required</sup> <a name="effective_start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```python
effective_start_time: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchDatasourceUnityCatalogConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---


### LakewatchDatasourceUpdatedByOutputReference <a name="LakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_datasource

lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchDatasourceUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a>

---



