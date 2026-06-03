# `dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule <a name="`dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides databricks_warehouses_default_warehouse_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverrides(Construct Scope, string Id, DataDatabricksWarehousesDefaultWarehouseOverridesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig">DataDatabricksWarehousesDefaultWarehouseOverridesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig">DataDatabricksWarehousesDefaultWarehouseOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverrides.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverrides.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverrides.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWarehousesDefaultWarehouseOverrides.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverrides to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWarehousesDefaultWarehouseOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides">DefaultWarehouseOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultWarehouseOverrides`<sup>Required</sup> <a name="DefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList DefaultWarehouseOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides {
    string Name,
    DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get"></a>

```csharp
private DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>[]

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId"></a>

```csharp
public string DefaultWarehouseOverrideId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---



