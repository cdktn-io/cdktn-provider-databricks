# `dataDatabricksApps` Submodule <a name="`dataDatabricksApps` Submodule" id="@cdktn/provider-databricks.dataDatabricksApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksApps <a name="DataDatabricksApps" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps databricks_apps}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksApps(Construct Scope, string Id, DataDatabricksAppsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig">DataDatabricksAppsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig">DataDatabricksAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAppsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksApps.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksApps.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksApps.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksApps.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksApps to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app"></a>

```csharp
public DataDatabricksAppsAppList App { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig"></a>

```csharp
public DataDatabricksAppsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAppsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsApp <a name="DataDatabricksAppsApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsApp {
    string Name,
    string BudgetPolicyId = null,
    string ComputeSize = null,
    string Description = null,
    DataDatabricksAppsAppGitRepository GitRepository = null,
    IResolvable|DataDatabricksAppsAppResources[] Resources = null,
    string Space = null,
    IResolvable|DataDatabricksAppsAppTelemetryExportDestinations[] TelemetryExportDestinations = null,
    string UsagePolicyId = null,
    string[] UserApiScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize">ComputeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#resources DataDatabricksApps#resources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.space">Space</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#space DataDatabricksApps#space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.telemetryExportDestinations">TelemetryExportDestinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes">UserApiScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}.

---

##### `ComputeSize`<sup>Optional</sup> <a name="ComputeSize" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize"></a>

```csharp
public string ComputeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.gitRepository"></a>

```csharp
public DataDatabricksAppsAppGitRepository GitRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#resources DataDatabricksApps#resources}.

---

##### `Space`<sup>Optional</sup> <a name="Space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#space DataDatabricksApps#space}.

---

##### `TelemetryExportDestinations`<sup>Optional</sup> <a name="TelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.telemetryExportDestinations"></a>

```csharp
public IResolvable|DataDatabricksAppsAppTelemetryExportDestinations[] TelemetryExportDestinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}.

---

##### `UsagePolicyId`<sup>Optional</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}.

---

##### `UserApiScopes`<sup>Optional</sup> <a name="UserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes"></a>

```csharp
public string[] UserApiScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}.

---

### DataDatabricksAppsAppActiveDeployment <a name="DataDatabricksAppsAppActiveDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeployment {
    string[] Command = null,
    string DeploymentId = null,
    IResolvable|DataDatabricksAppsAppActiveDeploymentEnvVars[] EnvVars = null,
    DataDatabricksAppsAppActiveDeploymentGitSource GitSource = null,
    string Mode = null,
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#command DataDatabricksApps#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.envVars">EnvVars</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#command DataDatabricksApps#command}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `EnvVars`<sup>Optional</sup> <a name="EnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.envVars"></a>

```csharp
public IResolvable|DataDatabricksAppsAppActiveDeploymentEnvVars[] EnvVars { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}.

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.gitSource"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentGitSource GitSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts {
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentEnvVars <a name="DataDatabricksAppsAppActiveDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentEnvVars {
    string Name = null,
    string Value = null,
    string ValueFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value DataDatabricksApps#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value DataDatabricksApps#value}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}.

---

### DataDatabricksAppsAppActiveDeploymentGitSource <a name="DataDatabricksAppsAppActiveDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentGitSource {
    string Branch = null,
    string Commit = null,
    string SourceCodePath = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.commit">Commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#commit DataDatabricksApps#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#tag DataDatabricksApps#tag}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

### DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository <a name="DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository {
    string Provider,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppActiveDeploymentStatus <a name="DataDatabricksAppsAppActiveDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentStatus {

};
```


### DataDatabricksAppsAppAppStatus <a name="DataDatabricksAppsAppAppStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppAppStatus {

};
```


### DataDatabricksAppsAppComputeStatus <a name="DataDatabricksAppsAppComputeStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppComputeStatus {

};
```


### DataDatabricksAppsAppGitRepository <a name="DataDatabricksAppsAppGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppGitRepository {
    string Provider,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppPendingDeployment <a name="DataDatabricksAppsAppPendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeployment {
    string[] Command = null,
    string DeploymentId = null,
    IResolvable|DataDatabricksAppsAppPendingDeploymentEnvVars[] EnvVars = null,
    DataDatabricksAppsAppPendingDeploymentGitSource GitSource = null,
    string Mode = null,
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#command DataDatabricksApps#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.envVars">EnvVars</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#command DataDatabricksApps#command}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `EnvVars`<sup>Optional</sup> <a name="EnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.envVars"></a>

```csharp
public IResolvable|DataDatabricksAppsAppPendingDeploymentEnvVars[] EnvVars { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}.

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.gitSource"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentGitSource GitSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts {
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentEnvVars <a name="DataDatabricksAppsAppPendingDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentEnvVars {
    string Name = null,
    string Value = null,
    string ValueFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value DataDatabricksApps#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value DataDatabricksApps#value}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}.

---

### DataDatabricksAppsAppPendingDeploymentGitSource <a name="DataDatabricksAppsAppPendingDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentGitSource {
    string Branch = null,
    string Commit = null,
    string SourceCodePath = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.commit">Commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#commit DataDatabricksApps#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#tag DataDatabricksApps#tag}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

### DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository <a name="DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository {
    string Provider,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppPendingDeploymentStatus <a name="DataDatabricksAppsAppPendingDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentStatus {

};
```


### DataDatabricksAppsAppResources <a name="DataDatabricksAppsAppResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResources {
    string Name,
    DataDatabricksAppsAppResourcesApp App = null,
    DataDatabricksAppsAppResourcesDatabase Database = null,
    string Description = null,
    DataDatabricksAppsAppResourcesExperiment Experiment = null,
    DataDatabricksAppsAppResourcesGenieSpace GenieSpace = null,
    DataDatabricksAppsAppResourcesJob Job = null,
    DataDatabricksAppsAppResourcesPostgres Postgres = null,
    DataDatabricksAppsAppResourcesSecret Secret = null,
    DataDatabricksAppsAppResourcesServingEndpoint ServingEndpoint = null,
    DataDatabricksAppsAppResourcesSqlWarehouse SqlWarehouse = null,
    DataDatabricksAppsAppResourcesUcSecurable UcSecurable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#app DataDatabricksApps#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#job DataDatabricksApps#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#secret DataDatabricksApps#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `App`<sup>Optional</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.app"></a>

```csharp
public DataDatabricksAppsAppResourcesApp App { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#app DataDatabricksApps#app}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database"></a>

```csharp
public DataDatabricksAppsAppResourcesDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `Experiment`<sup>Optional</sup> <a name="Experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.experiment"></a>

```csharp
public DataDatabricksAppsAppResourcesExperiment Experiment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}.

---

##### `GenieSpace`<sup>Optional</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace"></a>

```csharp
public DataDatabricksAppsAppResourcesGenieSpace GenieSpace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}.

---

##### `Job`<sup>Optional</sup> <a name="Job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job"></a>

```csharp
public DataDatabricksAppsAppResourcesJob Job { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#job DataDatabricksApps#job}.

---

##### `Postgres`<sup>Optional</sup> <a name="Postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.postgres"></a>

```csharp
public DataDatabricksAppsAppResourcesPostgres Postgres { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret"></a>

```csharp
public DataDatabricksAppsAppResourcesSecret Secret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#secret DataDatabricksApps#secret}.

---

##### `ServingEndpoint`<sup>Optional</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint"></a>

```csharp
public DataDatabricksAppsAppResourcesServingEndpoint ServingEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}.

---

##### `SqlWarehouse`<sup>Optional</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse"></a>

```csharp
public DataDatabricksAppsAppResourcesSqlWarehouse SqlWarehouse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}.

---

##### `UcSecurable`<sup>Optional</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable"></a>

```csharp
public DataDatabricksAppsAppResourcesUcSecurable UcSecurable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}.

---

### DataDatabricksAppsAppResourcesApp <a name="DataDatabricksAppsAppResourcesApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesApp {
    string Name = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesDatabase <a name="DataDatabricksAppsAppResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesDatabase {
    string DatabaseName,
    string InstanceName,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesExperiment <a name="DataDatabricksAppsAppResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesExperiment {
    string ExperimentId,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.experimentId">ExperimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.experimentId"></a>

```csharp
public string ExperimentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesGenieSpace <a name="DataDatabricksAppsAppResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesGenieSpace {
    string Name,
    string Permission,
    string SpaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId">SpaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId"></a>

```csharp
public string SpaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}.

---

### DataDatabricksAppsAppResourcesJob <a name="DataDatabricksAppsAppResourcesJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesJob {
    string Id,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesPostgres <a name="DataDatabricksAppsAppResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesPostgres {
    string Branch = null,
    string Database = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSecret <a name="DataDatabricksAppsAppResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesSecret {
    string Key,
    string Permission,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#key DataDatabricksApps#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#scope DataDatabricksApps#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#key DataDatabricksApps#key}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#scope DataDatabricksApps#scope}.

---

### DataDatabricksAppsAppResourcesServingEndpoint <a name="DataDatabricksAppsAppResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesServingEndpoint {
    string Name,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSqlWarehouse <a name="DataDatabricksAppsAppResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesSqlWarehouse {
    string Id,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesUcSecurable <a name="DataDatabricksAppsAppResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesUcSecurable {
    string Permission,
    string SecurableFullName,
    string SecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName">SecurableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName"></a>

```csharp
public string SecurableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}.

---

### DataDatabricksAppsAppTelemetryExportDestinations <a name="DataDatabricksAppsAppTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppTelemetryExportDestinations {
    DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog UnityCatalog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.property.unityCatalog">UnityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}. |

---

##### `UnityCatalog`<sup>Optional</sup> <a name="UnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.property.unityCatalog"></a>

```csharp
public DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog UnityCatalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}.

---

### DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog <a name="DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog {
    string LogsTable,
    string MetricsTable,
    string TracesTable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.logsTable">LogsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.metricsTable">MetricsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.tracesTable">TracesTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}. |

---

##### `LogsTable`<sup>Required</sup> <a name="LogsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.logsTable"></a>

```csharp
public string LogsTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}.

---

##### `MetricsTable`<sup>Required</sup> <a name="MetricsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.metricsTable"></a>

```csharp
public string MetricsTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}.

---

##### `TracesTable`<sup>Required</sup> <a name="TracesTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.tracesTable"></a>

```csharp
public string TracesTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}.

---

### DataDatabricksAppsConfig <a name="DataDatabricksAppsConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DataDatabricksAppsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAppsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}.

---

### DataDatabricksAppsProviderConfig <a name="DataDatabricksAppsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppActiveDeploymentEnvVarsList <a name="DataDatabricksAppsAppActiveDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentEnvVarsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get"></a>

```csharp
private DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppActiveDeploymentEnvVars[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

---


### DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```csharp
private void ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppActiveDeploymentEnvVars InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>

---


### DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference <a name="DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit">ResolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.gitRepository"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `ResolvedCommit`<sup>Required</sup> <a name="ResolvedCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```csharp
public string ResolvedCommit { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppActiveDeploymentGitSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---


### DataDatabricksAppsAppActiveDeploymentOutputReference <a name="DataDatabricksAppsAppActiveDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars">PutEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetEnvVars">ResetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvVars` <a name="PutEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars"></a>

```csharp
private void PutEnvVars(IResolvable|DataDatabricksAppsAppActiveDeploymentEnvVars[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

---

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource"></a>

```csharp
private void PutGitSource(DataDatabricksAppsAppActiveDeploymentGitSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetEnvVars` <a name="ResetEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetEnvVars"></a>

```csharp
private void ResetEnvVars()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetGitSource"></a>

```csharp
private void ResetGitSource()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts">DeploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVars">EnvVars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList">DataDatabricksAppsAppActiveDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVarsInput">EnvVarsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeploymentArtifacts`<sup>Required</sup> <a name="DeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference DeploymentArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `EnvVars`<sup>Required</sup> <a name="EnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVars"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentEnvVarsList EnvVars { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList">DataDatabricksAppsAppActiveDeploymentEnvVarsList</a>

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSource"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference GitSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `EnvVarsInput`<sup>Optional</sup> <a name="EnvVarsInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVarsInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppActiveDeploymentEnvVars[] EnvVarsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>[]

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSourceInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppActiveDeploymentGitSource GitSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppActiveDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a>

---


### DataDatabricksAppsAppActiveDeploymentStatusOutputReference <a name="DataDatabricksAppsAppActiveDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppActiveDeploymentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a>

---


### DataDatabricksAppsAppAppStatusOutputReference <a name="DataDatabricksAppsAppAppStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppAppStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppAppStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a>

---


### DataDatabricksAppsAppComputeStatusOutputReference <a name="DataDatabricksAppsAppComputeStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppComputeStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.activeInstances">ActiveInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveInstances`<sup>Required</sup> <a name="ActiveInstances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.activeInstances"></a>

```csharp
public double ActiveInstances { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppComputeStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a>

---


### DataDatabricksAppsAppGitRepositoryOutputReference <a name="DataDatabricksAppsAppGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppGitRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---


### DataDatabricksAppsAppList <a name="DataDatabricksAppsAppList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get"></a>

```csharp
private DataDatabricksAppsAppOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsApp[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>[]

---


### DataDatabricksAppsAppOutputReference <a name="DataDatabricksAppsAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository">PutGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations">PutTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize">ResetComputeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetGitRepository">ResetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetSpace">ResetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetTelemetryExportDestinations">ResetTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUsagePolicyId">ResetUsagePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes">ResetUserApiScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitRepository` <a name="PutGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository"></a>

```csharp
private void PutGitRepository(DataDatabricksAppsAppGitRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources"></a>

```csharp
private void PutResources(IResolvable|DataDatabricksAppsAppResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

---

##### `PutTelemetryExportDestinations` <a name="PutTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations"></a>

```csharp
private void PutTelemetryExportDestinations(IResolvable|DataDatabricksAppsAppTelemetryExportDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId"></a>

```csharp
private void ResetBudgetPolicyId()
```

##### `ResetComputeSize` <a name="ResetComputeSize" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize"></a>

```csharp
private void ResetComputeSize()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetGitRepository"></a>

```csharp
private void ResetGitRepository()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetSpace` <a name="ResetSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetSpace"></a>

```csharp
private void ResetSpace()
```

##### `ResetTelemetryExportDestinations` <a name="ResetTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetTelemetryExportDestinations"></a>

```csharp
private void ResetTelemetryExportDestinations()
```

##### `ResetUsagePolicyId` <a name="ResetUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUsagePolicyId"></a>

```csharp
private void ResetUsagePolicyId()
```

##### `ResetUserApiScopes` <a name="ResetUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes"></a>

```csharp
private void ResetUserApiScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment">ActiveDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus">AppStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus">ComputeStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath">DefaultSourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUsagePolicyId">EffectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes">EffectiveUserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference">DataDatabricksAppsAppGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId">Oauth2AppClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId">Oauth2AppIntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment">PendingDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId">ServicePrincipalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinations">TelemetryExportDestinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList">DataDatabricksAppsAppTelemetryExportDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.thumbnailUrl">ThumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater">Updater</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput">ComputeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinationsInput">TelemetryExportDestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyIdInput">UsagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput">UserApiScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize">ComputeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes">UserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDeployment`<sup>Required</sup> <a name="ActiveDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment"></a>

```csharp
public DataDatabricksAppsAppActiveDeploymentOutputReference ActiveDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a>

---

##### `AppStatus`<sup>Required</sup> <a name="AppStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus"></a>

```csharp
public DataDatabricksAppsAppAppStatusOutputReference AppStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a>

---

##### `ComputeStatus`<sup>Required</sup> <a name="ComputeStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus"></a>

```csharp
public DataDatabricksAppsAppComputeStatusOutputReference ComputeStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DefaultSourceCodePath`<sup>Required</sup> <a name="DefaultSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath"></a>

```csharp
public string DefaultSourceCodePath { get; }
```

- *Type:* string

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId"></a>

```csharp
public string EffectiveBudgetPolicyId { get; }
```

- *Type:* string

---

##### `EffectiveUsagePolicyId`<sup>Required</sup> <a name="EffectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUsagePolicyId"></a>

```csharp
public string EffectiveUsagePolicyId { get; }
```

- *Type:* string

---

##### `EffectiveUserApiScopes`<sup>Required</sup> <a name="EffectiveUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes"></a>

```csharp
public string[] EffectiveUserApiScopes { get; }
```

- *Type:* string[]

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepository"></a>

```csharp
public DataDatabricksAppsAppGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference">DataDatabricksAppsAppGitRepositoryOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Oauth2AppClientId`<sup>Required</sup> <a name="Oauth2AppClientId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId"></a>

```csharp
public string Oauth2AppClientId { get; }
```

- *Type:* string

---

##### `Oauth2AppIntegrationId`<sup>Required</sup> <a name="Oauth2AppIntegrationId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId"></a>

```csharp
public string Oauth2AppIntegrationId { get; }
```

- *Type:* string

---

##### `PendingDeployment`<sup>Required</sup> <a name="PendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentOutputReference PendingDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources"></a>

```csharp
public DataDatabricksAppsAppResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a>

---

##### `ServicePrincipalClientId`<sup>Required</sup> <a name="ServicePrincipalClientId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId"></a>

```csharp
public string ServicePrincipalClientId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `TelemetryExportDestinations`<sup>Required</sup> <a name="TelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinations"></a>

```csharp
public DataDatabricksAppsAppTelemetryExportDestinationsList TelemetryExportDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList">DataDatabricksAppsAppTelemetryExportDestinationsList</a>

---

##### `ThumbnailUrl`<sup>Required</sup> <a name="ThumbnailUrl" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.thumbnailUrl"></a>

```csharp
public string ThumbnailUrl { get; }
```

- *Type:* string

---

##### `Updater`<sup>Required</sup> <a name="Updater" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater"></a>

```csharp
public string Updater { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput"></a>

```csharp
public string BudgetPolicyIdInput { get; }
```

- *Type:* string

---

##### `ComputeSizeInput`<sup>Optional</sup> <a name="ComputeSizeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput"></a>

```csharp
public string ComputeSizeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepositoryInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppGitRepository GitRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `TelemetryExportDestinationsInput`<sup>Optional</sup> <a name="TelemetryExportDestinationsInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinationsInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppTelemetryExportDestinations[] TelemetryExportDestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

---

##### `UsagePolicyIdInput`<sup>Optional</sup> <a name="UsagePolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyIdInput"></a>

```csharp
public string UsagePolicyIdInput { get; }
```

- *Type:* string

---

##### `UserApiScopesInput`<sup>Optional</sup> <a name="UserApiScopesInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput"></a>

```csharp
public string[] UserApiScopesInput { get; }
```

- *Type:* string[]

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; }
```

- *Type:* string

---

##### `ComputeSize`<sup>Required</sup> <a name="ComputeSize" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize"></a>

```csharp
public string ComputeSize { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `UserApiScopes`<sup>Required</sup> <a name="UserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes"></a>

```csharp
public string[] UserApiScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsApp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>

---


### DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppPendingDeploymentEnvVarsList <a name="DataDatabricksAppsAppPendingDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentEnvVarsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get"></a>

```csharp
private DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppPendingDeploymentEnvVars[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

---


### DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```csharp
private void ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppPendingDeploymentEnvVars InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>

---


### DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference <a name="DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit">ResolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.gitRepository"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `ResolvedCommit`<sup>Required</sup> <a name="ResolvedCommit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```csharp
public string ResolvedCommit { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppPendingDeploymentGitSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---


### DataDatabricksAppsAppPendingDeploymentOutputReference <a name="DataDatabricksAppsAppPendingDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars">PutEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetEnvVars">ResetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvVars` <a name="PutEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars"></a>

```csharp
private void PutEnvVars(IResolvable|DataDatabricksAppsAppPendingDeploymentEnvVars[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

---

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource"></a>

```csharp
private void PutGitSource(DataDatabricksAppsAppPendingDeploymentGitSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetEnvVars` <a name="ResetEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetEnvVars"></a>

```csharp
private void ResetEnvVars()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetGitSource"></a>

```csharp
private void ResetGitSource()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts">DeploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVars">EnvVars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList">DataDatabricksAppsAppPendingDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVarsInput">EnvVarsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeploymentArtifacts`<sup>Required</sup> <a name="DeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference DeploymentArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `EnvVars`<sup>Required</sup> <a name="EnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVars"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentEnvVarsList EnvVars { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList">DataDatabricksAppsAppPendingDeploymentEnvVarsList</a>

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSource"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference GitSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `EnvVarsInput`<sup>Optional</sup> <a name="EnvVarsInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVarsInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppPendingDeploymentEnvVars[] EnvVarsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>[]

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSourceInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppPendingDeploymentGitSource GitSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppPendingDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a>

---


### DataDatabricksAppsAppPendingDeploymentStatusOutputReference <a name="DataDatabricksAppsAppPendingDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppPendingDeploymentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsAppPendingDeploymentStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a>

---


### DataDatabricksAppsAppResourcesAppOutputReference <a name="DataDatabricksAppsAppResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesApp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---


### DataDatabricksAppsAppResourcesDatabaseOutputReference <a name="DataDatabricksAppsAppResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesDatabase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---


### DataDatabricksAppsAppResourcesExperimentOutputReference <a name="DataDatabricksAppsAppResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesExperimentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentIdInput">ExperimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentId">ExperimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentIdInput"></a>

```csharp
public string ExperimentIdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentId"></a>

```csharp
public string ExperimentId { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesExperiment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---


### DataDatabricksAppsAppResourcesGenieSpaceOutputReference <a name="DataDatabricksAppsAppResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesGenieSpaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```csharp
public string SpaceIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesGenieSpace InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---


### DataDatabricksAppsAppResourcesJobOutputReference <a name="DataDatabricksAppsAppResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesJob InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---


### DataDatabricksAppsAppResourcesList <a name="DataDatabricksAppsAppResourcesList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get"></a>

```csharp
private DataDatabricksAppsAppResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>[]

---


### DataDatabricksAppsAppResourcesOutputReference <a name="DataDatabricksAppsAppResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp">PutApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment">PutExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace">PutGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob">PutJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres">PutPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint">PutServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse">PutSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable">PutUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetApp">ResetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetExperiment">ResetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace">ResetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob">ResetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetPostgres">ResetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint">ResetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse">ResetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable">ResetUcSecurable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApp` <a name="PutApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp"></a>

```csharp
private void PutApp(DataDatabricksAppsAppResourcesApp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(DataDatabricksAppsAppResourcesDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---

##### `PutExperiment` <a name="PutExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment"></a>

```csharp
private void PutExperiment(DataDatabricksAppsAppResourcesExperiment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---

##### `PutGenieSpace` <a name="PutGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace"></a>

```csharp
private void PutGenieSpace(DataDatabricksAppsAppResourcesGenieSpace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---

##### `PutJob` <a name="PutJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob"></a>

```csharp
private void PutJob(DataDatabricksAppsAppResourcesJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---

##### `PutPostgres` <a name="PutPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres"></a>

```csharp
private void PutPostgres(DataDatabricksAppsAppResourcesPostgres Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret"></a>

```csharp
private void PutSecret(DataDatabricksAppsAppResourcesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---

##### `PutServingEndpoint` <a name="PutServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint"></a>

```csharp
private void PutServingEndpoint(DataDatabricksAppsAppResourcesServingEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---

##### `PutSqlWarehouse` <a name="PutSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse"></a>

```csharp
private void PutSqlWarehouse(DataDatabricksAppsAppResourcesSqlWarehouse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---

##### `PutUcSecurable` <a name="PutUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable"></a>

```csharp
private void PutUcSecurable(DataDatabricksAppsAppResourcesUcSecurable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---

##### `ResetApp` <a name="ResetApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetApp"></a>

```csharp
private void ResetApp()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExperiment` <a name="ResetExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetExperiment"></a>

```csharp
private void ResetExperiment()
```

##### `ResetGenieSpace` <a name="ResetGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace"></a>

```csharp
private void ResetGenieSpace()
```

##### `ResetJob` <a name="ResetJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob"></a>

```csharp
private void ResetJob()
```

##### `ResetPostgres` <a name="ResetPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetPostgres"></a>

```csharp
private void ResetPostgres()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetServingEndpoint` <a name="ResetServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint"></a>

```csharp
private void ResetServingEndpoint()
```

##### `ResetSqlWarehouse` <a name="ResetSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse"></a>

```csharp
private void ResetSqlWarehouse()
```

##### `ResetUcSecurable` <a name="ResetUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable"></a>

```csharp
private void ResetUcSecurable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference">DataDatabricksAppsAppResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference">DataDatabricksAppsAppResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference">DataDatabricksAppsAppResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.appInput">AppInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experimentInput">ExperimentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput">GenieSpaceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput">JobInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgresInput">PostgresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput">SecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput">ServingEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput">SqlWarehouseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput">UcSecurableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.app"></a>

```csharp
public DataDatabricksAppsAppResourcesAppOutputReference App { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference">DataDatabricksAppsAppResourcesAppOutputReference</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database"></a>

```csharp
public DataDatabricksAppsAppResourcesDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a>

---

##### `Experiment`<sup>Required</sup> <a name="Experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experiment"></a>

```csharp
public DataDatabricksAppsAppResourcesExperimentOutputReference Experiment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference">DataDatabricksAppsAppResourcesExperimentOutputReference</a>

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace"></a>

```csharp
public DataDatabricksAppsAppResourcesGenieSpaceOutputReference GenieSpace { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a>

---

##### `Job`<sup>Required</sup> <a name="Job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job"></a>

```csharp
public DataDatabricksAppsAppResourcesJobOutputReference Job { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a>

---

##### `Postgres`<sup>Required</sup> <a name="Postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgres"></a>

```csharp
public DataDatabricksAppsAppResourcesPostgresOutputReference Postgres { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference">DataDatabricksAppsAppResourcesPostgresOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret"></a>

```csharp
public DataDatabricksAppsAppResourcesSecretOutputReference Secret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a>

---

##### `ServingEndpoint`<sup>Required</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint"></a>

```csharp
public DataDatabricksAppsAppResourcesServingEndpointOutputReference ServingEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a>

---

##### `SqlWarehouse`<sup>Required</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse"></a>

```csharp
public DataDatabricksAppsAppResourcesSqlWarehouseOutputReference SqlWarehouse { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a>

---

##### `UcSecurable`<sup>Required</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable"></a>

```csharp
public DataDatabricksAppsAppResourcesUcSecurableOutputReference UcSecurable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.appInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesApp AppInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesDatabase DatabaseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExperimentInput`<sup>Optional</sup> <a name="ExperimentInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experimentInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesExperiment ExperimentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---

##### `GenieSpaceInput`<sup>Optional</sup> <a name="GenieSpaceInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesGenieSpace GenieSpaceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---

##### `JobInput`<sup>Optional</sup> <a name="JobInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesJob JobInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostgresInput`<sup>Optional</sup> <a name="PostgresInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgresInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesPostgres PostgresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesSecret SecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---

##### `ServingEndpointInput`<sup>Optional</sup> <a name="ServingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesServingEndpoint ServingEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---

##### `SqlWarehouseInput`<sup>Optional</sup> <a name="SqlWarehouseInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesSqlWarehouse SqlWarehouseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---

##### `UcSecurableInput`<sup>Optional</sup> <a name="UcSecurableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesUcSecurable UcSecurableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>

---


### DataDatabricksAppsAppResourcesPostgresOutputReference <a name="DataDatabricksAppsAppResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesPostgresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesPostgres InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---


### DataDatabricksAppsAppResourcesSecretOutputReference <a name="DataDatabricksAppsAppResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---


### DataDatabricksAppsAppResourcesServingEndpointOutputReference <a name="DataDatabricksAppsAppResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesServingEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesServingEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---


### DataDatabricksAppsAppResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppsAppResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesSqlWarehouseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesSqlWarehouse InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---


### DataDatabricksAppsAppResourcesUcSecurableOutputReference <a name="DataDatabricksAppsAppResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppResourcesUcSecurableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableKind">SecurableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput">SecurableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName">SecurableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurableKind`<sup>Required</sup> <a name="SecurableKind" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableKind"></a>

```csharp
public string SecurableKind { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SecurableFullNameInput`<sup>Optional</sup> <a name="SecurableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```csharp
public string SecurableFullNameInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```csharp
public string SecurableFullName { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppResourcesUcSecurable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---


### DataDatabricksAppsAppTelemetryExportDestinationsList <a name="DataDatabricksAppsAppTelemetryExportDestinationsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppTelemetryExportDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get"></a>

```csharp
private DataDatabricksAppsAppTelemetryExportDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppTelemetryExportDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>[]

---


### DataDatabricksAppsAppTelemetryExportDestinationsOutputReference <a name="DataDatabricksAppsAppTelemetryExportDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppTelemetryExportDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog">PutUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resetUnityCatalog">ResetUnityCatalog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUnityCatalog` <a name="PutUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog"></a>

```csharp
private void PutUnityCatalog(DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `ResetUnityCatalog` <a name="ResetUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resetUnityCatalog"></a>

```csharp
private void ResetUnityCatalog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalog">UnityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput">UnityCatalogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnityCatalog`<sup>Required</sup> <a name="UnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalog"></a>

```csharp
public DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference UnityCatalog { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference</a>

---

##### `UnityCatalogInput`<sup>Optional</sup> <a name="UnityCatalogInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput"></a>

```csharp
public IResolvable|DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog UnityCatalogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppTelemetryExportDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>

---


### DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference <a name="DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput">LogsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput">MetricsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput">TracesTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable">LogsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable">MetricsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable">TracesTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogsTableInput`<sup>Optional</sup> <a name="LogsTableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput"></a>

```csharp
public string LogsTableInput { get; }
```

- *Type:* string

---

##### `MetricsTableInput`<sup>Optional</sup> <a name="MetricsTableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput"></a>

```csharp
public string MetricsTableInput { get; }
```

- *Type:* string

---

##### `TracesTableInput`<sup>Optional</sup> <a name="TracesTableInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput"></a>

```csharp
public string TracesTableInput { get; }
```

- *Type:* string

---

##### `LogsTable`<sup>Required</sup> <a name="LogsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable"></a>

```csharp
public string LogsTable { get; }
```

- *Type:* string

---

##### `MetricsTable`<sup>Required</sup> <a name="MetricsTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable"></a>

```csharp
public string MetricsTable { get; }
```

- *Type:* string

---

##### `TracesTable`<sup>Required</sup> <a name="TracesTable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable"></a>

```csharp
public string TracesTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---


### DataDatabricksAppsProviderConfigOutputReference <a name="DataDatabricksAppsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---



