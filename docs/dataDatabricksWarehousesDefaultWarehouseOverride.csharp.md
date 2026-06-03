# `dataDatabricksWarehousesDefaultWarehouseOverride` Submodule <a name="`dataDatabricksWarehousesDefaultWarehouseOverride` Submodule" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverride <a name="DataDatabricksWarehousesDefaultWarehouseOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverride(Construct Scope, string Id, DataDatabricksWarehousesDefaultWarehouseOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig">DataDatabricksWarehousesDefaultWarehouseOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig">DataDatabricksWarehousesDefaultWarehouseOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverride.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverride.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverride to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWarehousesDefaultWarehouseOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId"></a>

```csharp
public string DefaultWarehouseOverrideId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfig"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrideConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverrideConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverrideConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#name DataDatabricksWarehousesDefaultWarehouseOverride#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#provider_config DataDatabricksWarehousesDefaultWarehouseOverride#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#name DataDatabricksWarehousesDefaultWarehouseOverride#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideConfig.property.providerConfig"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#provider_config DataDatabricksWarehousesDefaultWarehouseOverride#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#workspace_id DataDatabricksWarehousesDefaultWarehouseOverride#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_override#workspace_id DataDatabricksWarehousesDefaultWarehouseOverride#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverride.DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverrideProviderConfig</a>

---



