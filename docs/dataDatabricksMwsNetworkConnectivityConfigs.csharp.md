# `dataDatabricksMwsNetworkConnectivityConfigs` Submodule <a name="`dataDatabricksMwsNetworkConnectivityConfigs` Submodule" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsNetworkConnectivityConfigs <a name="DataDatabricksMwsNetworkConnectivityConfigs" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs databricks_mws_network_connectivity_configs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMwsNetworkConnectivityConfigs(Construct Scope, string Id, DataDatabricksMwsNetworkConnectivityConfigsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig">DataDatabricksMwsNetworkConnectivityConfigsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig">DataDatabricksMwsNetworkConnectivityConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetNames">ResetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNames` <a name="ResetNames" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetNames"></a>

```csharp
private void ResetNames()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMwsNetworkConnectivityConfigs resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMwsNetworkConnectivityConfigs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMwsNetworkConnectivityConfigs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMwsNetworkConnectivityConfigs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMwsNetworkConnectivityConfigs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksMwsNetworkConnectivityConfigs resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMwsNetworkConnectivityConfigs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMwsNetworkConnectivityConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsNetworkConnectivityConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.namesInput">NamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.namesInput"></a>

```csharp
public string[] NamesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsNetworkConnectivityConfigsConfig <a name="DataDatabricksMwsNetworkConnectivityConfigsConfig" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMwsNetworkConnectivityConfigsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string[] Names = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#id DataDatabricksMwsNetworkConnectivityConfigs#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.names">Names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#names DataDatabricksMwsNetworkConnectivityConfigs#names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#region DataDatabricksMwsNetworkConnectivityConfigs#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#id DataDatabricksMwsNetworkConnectivityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Names`<sup>Optional</sup> <a name="Names" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.names"></a>

```csharp
public string[] Names { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#names DataDatabricksMwsNetworkConnectivityConfigs#names}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/mws_network_connectivity_configs#region DataDatabricksMwsNetworkConnectivityConfigs#region}.

---



