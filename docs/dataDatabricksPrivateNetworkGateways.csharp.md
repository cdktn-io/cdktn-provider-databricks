# `dataDatabricksPrivateNetworkGateways` Submodule <a name="`dataDatabricksPrivateNetworkGateways` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways databricks_private_network_gateways}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGateways(Construct Scope, string Id, DataDatabricksPrivateNetworkGatewaysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig">DataDatabricksPrivateNetworkGatewaysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig">DataDatabricksPrivateNetworkGatewaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPrivateNetworkGateways.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPrivateNetworkGateways.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPrivateNetworkGateways.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPrivateNetworkGateways.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateways to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPrivateNetworkGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways">PrivateNetworkGateways</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PrivateNetworkGateways`<sup>Required</sup> <a name="PrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList PrivateNetworkGateways { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewaysConfig <a name="DataDatabricksPrivateNetworkGatewaysConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection {
    DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole CrossAccountRole,
    IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] GatewaySubnets,
    string[] SecurityGroupIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets">GatewaySubnets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}. |

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole CrossAccountRole { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}.

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets"></a>

```csharp
public IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] GatewaySubnets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole {
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection {
    DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet GatewaySubnet
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}. |

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet GatewaySubnet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet {
    string ResourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations {
    string DestinationType,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers {
    string ResolverType,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType">ResolverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType"></a>

```csharp
public string ResolverType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get"></a>

```csharp
private DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets">PutGatewaySubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```csharp
private void PutCrossAccountRole(DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `PutGatewaySubnets` <a name="PutGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```csharp
private void PutGatewaySubnets(IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets">GatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">GatewaySubnetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference CrossAccountRole { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList GatewaySubnets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole CrossAccountRoleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `GatewaySubnetsInput`<sup>Optional</sup> <a name="GatewaySubnetsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```csharp
public IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets[] GatewaySubnetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet">PutGatewaySubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewaySubnet` <a name="PutGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```csharp
private void PutGatewaySubnet(DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput">GatewaySubnetInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference GatewaySubnet { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `GatewaySubnetInput`<sup>Optional</sup> <a name="GatewaySubnetInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet GatewaySubnetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get"></a>

```csharp
private DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get"></a>

```csharp
private DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode">TrafficMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsCloudConnection`<sup>Required</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference AwsCloudConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a>

---

##### `AzureCloudConnection`<sup>Required</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference AzureCloudConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a>

---

##### `BandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond"></a>

```csharp
public double BandwidthTierGigabitsPerSecond { get; }
```

- *Type:* double

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `PrivateDnsResolvers`<sup>Required</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList PrivateDnsResolvers { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode"></a>

```csharp
public string TrafficMode { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get"></a>

```csharp
private DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>[]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput">ResolverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType">ResolverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResolverTypeInput`<sup>Optional</sup> <a name="ResolverTypeInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```csharp
public string ResolverTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType"></a>

```csharp
public string ResolverType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>

---



